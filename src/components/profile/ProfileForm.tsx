'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { createClient } from '@/lib/supabase/client';
import type { ProfileFormData } from '@/types/profile';

export function ProfileForm() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [profile, setProfile] = useState<ProfileFormData>({
    username: '',
    full_name: '',
    avatar_url: '',
  });

  const fetchProfile = useCallback(async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      const supabase = await createClient();
      if (!supabase) throw new Error('Could not initialize Supabase client');

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) throw error;

      if (data) {
        setProfile({
          username: data.username || '',
          full_name: data.full_name || '',
          avatar_url: data.avatar_url || '',
        });
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user, fetchProfile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      const supabase = await createClient();
      if (!supabase) throw new Error('Could not initialize Supabase client');

      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user?.id,
          ...profile,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;
      setSuccess(true);
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h2 className="text-2xl font-serif font-bold text-gray-900">
            Profile Settings
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Update your profile information
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="text-sm text-red-700">{error}</div>
          </div>
        )}

        {success && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="text-sm text-green-700">
              Profile updated successfully
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="full_name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={profile.full_name}
              onChange={(e) =>
                setProfile({ ...profile, full_name: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="avatar_url"
              className="block text-sm font-medium text-gray-700"
            >
              Avatar URL
            </label>
            <input
              type="url"
              id="avatar_url"
              value={profile.avatar_url}
              onChange={(e) =>
                setProfile({ ...profile, avatar_url: e.target.value })
              }
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
} 