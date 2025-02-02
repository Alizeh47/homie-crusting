'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'United States',
    avatar: '/images/avatars/avatar1.jpg',
    quote:
      'The cultural immersion experience was beyond my expectations. Every moment felt like a beautiful story unfolding, connecting me with people despite our different languages.',
  },
  {
    id: 2,
    name: 'Marco Rossi',
    location: 'Italy',
    avatar: '/images/avatars/avatar2.jpg',
    quote:
      'The spiritual retreat in Bhutan transformed my perspective on life. The serenity and wisdom I encountered will stay with me forever.',
  },
  {
    id: 3,
    name: 'Yuki Tanaka',
    location: 'Japan',
    avatar: '/images/avatars/avatar3.jpg',
    quote:
      'From the local festivals to the quiet moments in ancient temples, every experience was carefully curated to create lasting memories.',
  },
];

export default function UserReviews() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-4xl font-bold text-white md:text-5xl"
        >
          Traveler Stories
        </motion.h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20">
            <FaChevronLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20">
            <FaChevronRight className="h-6 w-6" />
          </button>

          {/* Reviews Grid */}
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gray-800 p-6 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <FaQuoteLeft className="mb-4 h-8 w-8 text-gray-600" />
                <blockquote className="mb-6">
                  <p className="text-lg font-light italic text-gray-300">{review.quote}</p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-sans text-lg font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 