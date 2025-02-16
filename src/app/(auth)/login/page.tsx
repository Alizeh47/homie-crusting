'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiStar, FiHeart, FiUser, FiLock } from 'react-icons/fi';
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

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, user, initError } = useAuth();
  const router = useRouter();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn(email, password);
      
      if (result.error) {
        setError(result.error);
      }
    } catch (err) {
      setError('We&apos;re having trouble connecting. Please check your internet connection and try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E3F2FD] via-white to-white">
      {/* Decorative Elements */}
      <FloatingIcon icon={FiStar} className="top-20 left-[10%]" />
      <FloatingIcon icon={FiHeart} className="top-40 right-[15%]" delay={1} />
      <FloatingIcon icon={FiStar} className="bottom-40 left-[20%]" delay={2} />
      <FloatingIcon icon={FiHeart} className="top-60 right-[25%]" delay={1.5} />

      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-[1400px] h-[900px] opacity-40">
        <Image
          src="/images/culture/hero.jpg"
          alt="Cultural connection"
          fill
          className="object-contain"
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
                Welcome Back
              </h1>
              <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-4">
                <span>✧</span>
                <span>✦</span>
                <span>✧</span>
              </div>
              <p className="text-lg text-[#1a237e]/70">
                Sign in to continue your cultural journey
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
              {(error || initError) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg bg-red-50 p-4 text-center"
                >
                  <div className="text-sm text-red-700">
                    <p className="font-medium">{initError || error}</p>
                  </div>
                </motion.div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="email-address" className="block text-sm font-medium text-[#1a237e]/70 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-[#1a237e]/40" />
                    </div>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full pl-10 px-3 py-2 border border-[#E3F2FD] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full pl-10 px-3 py-2 border border-[#E3F2FD] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-[#1a237e] hover:text-[#0d47a1] transition-colors"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#1a237e] to-[#0d47a1] hover:from-[#0d47a1] hover:to-[#1a237e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a237e] transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </div>
                ) : (
                  'Sign in'
                )}
              </motion.button>

              <div className="text-center mt-6">
                <p className="text-sm text-[#1a237e]/70">
                  Don't have an account?{' '}
                  <Link
                    href="/signup"
                    className="font-medium text-[#1a237e] hover:text-[#0d47a1] transition-colors"
                  >
                    Create one now
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 