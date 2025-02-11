'use client';

import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';
import type { User, Session } from '@supabase/supabase-js';

if (typeof window !== 'undefined') {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }
}

export const supabase = typeof window !== 'undefined' 
  ? createSupabaseClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          flowType: 'pkce'
        },
        global: {
          fetch: (...args) => {
            return fetch(...args).catch(() => {
              return Promise.reject({
                error: {
                  message: 'Unable to connect. Please check your internet connection.'
                }
              });
            });
          }
        }
      }
    )
  : null;

export const createClient = () => {
  if (!supabase) {
    throw new Error('Supabase client can only be used in the browser');
  }
  return supabase;
};

export type { User, Session }