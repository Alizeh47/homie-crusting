'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E3F2FD]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Discover the world"
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
            Discover Amazing Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Embark on a journey to explore unique cultures, breathtaking landscapes, and unforgettable experiences.
          </motion.p>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]"
          >
            Featured Destinations
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cultural Heritage',
                description: 'Explore ancient traditions and historical landmarks',
                image: '/images/categories/cultural.jpg'
              },
              {
                title: 'Natural Wonders',
                description: 'Experience breathtaking landscapes and natural phenomena',
                image: '/images/categories/adventure.jpg'
              },
              {
                title: 'Local Experiences',
                description: 'Immerse yourself in authentic local experiences',
                image: '/images/categories/spiritual.jpg'
              }
            ].map((destination, index) => (
              <motion.div
                key={destination.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative h-80 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={destination.image}
                  alt={destination.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
                  <p className="text-sm opacity-90">{destination.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 