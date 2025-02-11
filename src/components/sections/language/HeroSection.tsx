'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading state
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80 z-10" />
        <Image
          src="/images/language/hero-bg.jpg"
          alt="Cultural diversity through language"
          fill
          className="object-cover"
          priority
        />
        
        {/* Animated Stars */}
        <AnimatePresence>
          <div className="absolute inset-0 z-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ opacity: 0.3, scale: 0.3 }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold text-white mb-6"
        >
          Cultural Exchange of Emotions and Feelings:
          <span className="block mt-2">A Universal Connection</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 italic tracking-wide"
        >
          Emotions transcend borders, but the way we express them is deeply rooted in culture.
          Discover unique words and phrases that capture emotions like never before.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/language/expressions')}
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full
                     text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Words
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection; 