'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  initError: string | null;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  initError: null,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  resetPassword: async () => ({ error: null }),
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let retryCount = 0;
    const maxRetries = 3;

    const getUser = async () => {
      try {
        const supabase = createClient();
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Session error:', error);
          if (retryCount < maxRetries) {
            retryCount++;
            setTimeout(getUser, 1000 * retryCount); // Exponential backoff
            return;
          }
          throw error;
        }

        if (mounted) {
          setUser(session?.user ?? null);
          setLoading(false);
          setInitError(null);
        }
      } catch (error) {
        console.error('Error getting session:', error);
        if (mounted) {
          setUser(null);
          setLoading(false);
          setInitError('Unable to initialize authentication. Please refresh the page or try again later.');
        }
      }
    };

    if (typeof window !== 'undefined') {
      getUser();

      try {
        const supabase = createClient();
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
          if (mounted) {
            setUser(session?.user ?? null);
            setLoading(false);
            setInitError(null);
          }
        });

        return () => {
          mounted = false;
          subscription.unsubscribe();
        };
      } catch (error) {
        console.error('Error setting up auth listener:', error);
        if (mounted) {
          setInitError('Unable to initialize authentication. Please refresh the page or try again later.');
        }
        return () => {
          mounted = false;
        };
      }
    } else {
      setLoading(false);
      return () => {
        mounted = false;
      };
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        console.error('Sign in error:', error);
        
        if (error.message.includes('Invalid login credentials')) {
          return { error: 'Incorrect email or password. Please try again.' };
        }
        if (error.message.includes('Email not confirmed')) {
          return { error: 'Please verify your email address before signing in.' };
        }
        if (error.message.includes('Unable to connect')) {
          return { error: 'Please check your internet connection and try again.' };
        }
        return { error: 'Unable to sign in. Please try again.' };
      }
      
      return { error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { error: 'Please check your internet connection and try again.' };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      });
      
      if (error) {
        console.error('Sign up error:', error);
        
        if (error.message.includes('Email rate limit')) {
          return { error: 'Please wait a moment before trying again.' };
        }
        if (error.message.includes('already registered')) {
          return { error: 'This email is already registered. Please sign in instead.' };
        }
        if (error.message.includes('Unable to connect')) {
          return { error: 'Please check your internet connection and try again.' };
        }
        return { error: 'Unable to create account. Please try again.' };
      }
      
      return { error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { error: 'Please check your internet connection and try again.' };
    }
  };

  const signOut = async () => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Sign out error:', error);
      throw new Error('Unable to sign out. Please try again.');
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/callback`
      });
      
      if (error) {
        console.error('Reset password error:', error);
        
        if (error.message.includes('rate limit')) {
          return { error: 'Please wait a moment before trying again.' };
        }
        if (error.message.includes('Unable to connect')) {
          return { error: 'Please check your internet connection and try again.' };
        }
        return { error: 'If an account exists, you will receive a reset link.' };
      }
      
      return { error: null };
    } catch (error) {
      console.error('Reset password error:', error);
      return { error: 'Please check your internet connection and try again.' };
    }
  };

  const value = {
    user,
    loading,
    initError,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 