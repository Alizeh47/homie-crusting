'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Cultural site with dreamy atmosphere"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center font-serif text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#05081c]"
        >
          Cultural Exchange of Emotions and Feelings:
          <span className="block">A Universal Connection</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 max-w-3xl text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed text-white"
        >
          Journey through destinations that stir the soul, where joy, wonder, and serenity await at every turn. Experience the emotional tapestry of diverse cultures, creating connections that transcend language and borders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/discover">
            <button className="rounded-full bg-[#05081c] px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-white transition-all hover:bg-opacity-90">
              Discover More
            </button>
          </Link>
          <Link href="/journey">
            <button className="rounded-full border-2 border-[#05081c] bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-[#05081c] transition-all hover:bg-[#05081c] hover:text-white">
              Start Your Journey
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 