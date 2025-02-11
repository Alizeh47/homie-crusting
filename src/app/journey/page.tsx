'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E3F2FD]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/categories/adventure.jpg"
            alt="Start your journey"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-center mb-6"
          >
            Begin Your Adventure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Choose your path and start exploring the world's most enchanting destinations.
          </motion.p>
        </div>
      </section>

      {/* Journey Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]"
          >
            Choose Your Path
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Cultural Explorer',
                description: 'Dive deep into local traditions, festivals, and customs',
                image: '/images/categories/cultural.jpg',
                link: '/explore/cultural'
              },
              {
                title: 'Adventure Seeker',
                description: 'Challenge yourself with thrilling outdoor experiences',
                image: '/images/categories/adventure.jpg',
                link: '/explore/adventure'
              },
              {
                title: 'Spiritual Journey',
                description: 'Find inner peace through meditation and sacred places',
                image: '/images/categories/spiritual.jpg',
                link: '/explore/spiritual'
              },
              {
                title: 'Wellness Retreat',
                description: 'Rejuvenate your mind, body, and soul',
                image: '/images/categories/wellness.jpg',
                link: '/explore/wellness'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-96 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{category.description}</p>
                  <Link href={category.link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-white text-[#1a237e] rounded-full font-medium text-sm
                               hover:bg-[#1a237e] hover:text-white transition-all duration-300"
                    >
                      Explore Path
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 