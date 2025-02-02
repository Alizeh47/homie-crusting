'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// @ts-ignore -- TODO: Install @types/next when disk space is available
export default function IntroductionSection() {
  return (
    <section className="bg-beige-50 py-20">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="font-serif text-3xl font-bold italic text-gray-900 md:text-4xl lg:text-5xl">
            Emotions: The Essence of Human Existence
          </h2>
          <div className="mt-8 space-y-4 text-gray-700">
            <p className="text-lg font-light leading-relaxed">
              In every corner of the world, emotions speak a language that needs no translation. They are the threads that weave our shared human experience, transcending cultural boundaries and connecting hearts across continents.
            </p>
            <p className="text-lg font-light leading-relaxed">
              Through our curated experiences, we invite you to explore the universal language of feelings - from the joy of shared laughter to the serenity of spiritual connection, from the warmth of cultural hospitality to the wonder of discovering new perspectives.
            </p>
            <p className="text-lg font-light leading-relaxed">
              Each journey is an opportunity to experience the depth of human emotion and the richness of cultural diversity, creating memories that resonate with the heart's universal rhythm.
            </p>
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/emotions/meditation.jpg"
              alt="People meditating"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110 sepia"
            />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/emotions/dancing.jpg"
              alt="People dancing"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110 sepia"
            />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/emotions/celebration.jpg"
              alt="Cultural celebration"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110 sepia"
            />
          </div>
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/emotions/connection.jpg"
              alt="Human connection"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110 sepia"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 