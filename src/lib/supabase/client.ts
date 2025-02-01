'use client';

import type { Database } from '@/types/supabase'
import type { SupabaseClient } from '@supabase/supabase-js'
import type { User, Session } from '@supabase/supabase-js'

let supabase: SupabaseClient<Database> | null = null;

export const createClient = async () => {
  if (typeof window === 'undefined') {
    throw new Error('createClient can only be called in the browser')
  }

  if (supabase) return supabase;

  try {
    const { createBrowserClient } = await import('@supabase/ssr')
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables')
    }

    supabase = createBrowserClient<Database>(
      supabaseUrl,
      supabaseAnonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          flowType: 'pkce',
        },
      }
    )

    return supabase
  } catch (error) {
    console.error('Error creating Supabase client:', error)
    throw error
  }
}

export type { User, Session }