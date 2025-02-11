'use client';

import { createBrowserClient } from '@supabase/ssr';
import type { Database } from '@/types/supabase';
import type { User, Session } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      flowType: 'pkce',
      debug: false
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
);

export const createClient = () => supabase;

export type { User, Session }