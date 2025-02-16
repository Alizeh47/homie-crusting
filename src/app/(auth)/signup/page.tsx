'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiStar, FiHeart, FiUser, FiLock, FiMail } from 'react-icons/fi';
import Image from 'next/image';
import { IconType } from 'react-icons';

interface FloatingIconProps {
  icon: IconType;
  className?: string;
  delay?: number;
}

const FloatingIcon = ({ icon: Icon, className = "", delay = 0 }: FloatingIconProps) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute ${className}`}
  >
    <Icon className="text-[#1a237e]/20 w-8 h-8" />
  </motion.div>
);

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.full_name
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        setSuccess(true);
        setFormData({
          email: '',
          password: '',
          full_name: ''
        });
      }
    } catch (err) {
      if (err instanceof Error) {
        if (err.message.includes('Email rate limit exceeded')) {
          setError('Too many signup attempts. Please try again later.');
        } else if (err.message.includes('already registered')) {
          setError('This email is already registered. Please sign in instead.');
        } else {
          setError('Unable to create account. Please try again later.');
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E3F2FD] via-white to-white">
      {/* Decorative Elements */}
      <FloatingIcon icon={FiStar} className="top-20 left-[10%]" />
      <FloatingIcon icon={FiHeart} className="top-40 right-[15%]" delay={1} />
      <FloatingIcon icon={FiStar} className="bottom-40 left-[20%]" delay={2} />
      <FloatingIcon icon={FiHeart} className="top-60 right-[25%]" delay={1.5} />

      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-[2100px] h-[800px] opacity-10">
        <Image
          src="/images/culture/lantern.jpg"
          alt="Cultural celebration"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">
                Join Our Community
              </h1>
              <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-4">
                <span>✧</span>
                <span>✦</span>
                <span>✧</span>
              </div>
              <p className="text-lg text-[#1a237e]/70">
                Begin your journey of cultural discovery
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-lg rounded-[30px] p-8 shadow-xl border border-[#E3F2FD]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-50 p-4"
                >
                  <div className="text-sm text-red-700">{error}</div>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-green-50 p-4 text-center"
                >
                  <div className="text-sm text-green-700">
                    <p className="font-medium mb-1">Sign up successful! 🎉</p>
                    <p>Please check your email to verify your account before logging in.</p>
                  </div>
                </motion.div>
              )}

              {!success && (
                <>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-medium text-[#1a237e]/70 mb-2">
                        Full Name
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        required
                        className="appearance-none block w-full pl-10 px-3 py-2 border border-[#E3F2FD] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your full name"
                        value={formData.full_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1a237e]/70 mb-2">
                        Email address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiMail className="h-5 w-5 text-[#1a237e]/40" />
                        </div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full pl-10 px-3 py-2 border border-[#E3F2FD] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-[#1a237e]/70 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FiLock className="h-5 w-5 text-[#1a237e]/40" />
                        </div>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="appearance-none block w-full pl-10 px-3 py-2 border border-[#E3F2FD] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-transparent transition-all duration-300"
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#1a237e] to-[#0d47a1] hover:from-[#0d47a1] hover:to-[#1a237e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a237e] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {loading ? 'Creating account...' : 'Sign up'}
                  </motion.button>
                </>
              )}

              <div className="text-center mt-6">
                <p className="text-sm text-[#1a237e]/70">
                  Already have an account?{' '}
                  <Link
                    href="/login"
                    className="font-medium text-[#1a237e] hover:text-[#0d47a1] transition-colors"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 