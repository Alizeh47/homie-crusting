'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TeaCeremonyWisdomPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#F3E5F5]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stories/tea.jpg"
            alt="Japanese Tea Ceremony"
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
            Tea Ceremony Wisdom
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Finding peace in the art of Japanese tea preparation
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Story Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-purple-600 font-semibold uppercase tracking-wider mb-2">Japan</p>
            <p className="text-gray-600">Cherry Blossom Season</p>
          </motion.div>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <p>
              In the heart of Kyoto, where ancient traditions blend seamlessly with modern life, 
              the Japanese tea ceremony stands as a profound meditation on mindfulness and presence. 
              Through the precise movements and careful attention to detail, tea masters transform a 
              simple act into an art form that transcends cultural boundaries.
            </p>

            <div className="my-12 relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/stories/tea-preperation.jpg"
                alt="Tea master preparing matcha"
                fill
                className="object-cover"

              />
            </div>

            <h2>The Art of Presence</h2>
            <p>
              Every gesture in the tea ceremony carries meaning, from the way the tea bowl is turned 
              to the precise angle of the bamboo whisk. These movements, perfected over centuries, 
              create a meditation in motion that invites participants to find beauty in simplicity 
              and peace in the present moment.
            </p>

            <h2>Beyond Language</h2>
            <p>
              What makes the tea ceremony truly remarkable is its ability to communicate profound 
              truths without words. The silence between movements speaks volumes, and the shared 
              experience creates connections that transcend language barriers, cultural differences, 
              and time itself.
            </p>

            <div className="my-12 relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/stories/tea-garden.jpg"
                alt="Traditional Japanese tea garden"
                fill
                className="object-cover"
              />
            </div>

            <h2>Seasonal Harmony</h2>
            <p>
              The tea ceremony changes with the seasons, reflecting the Japanese appreciation for 
              nature's rhythms. During cherry blossom season, the ceremony takes on special significance, 
              as the ephemeral beauty of the blossoms reminds us of life's impermanence and the 
              importance of cherishing each moment.
            </p>

            <h2>Modern Relevance</h2>
            <p>
              In our fast-paced world, the tea ceremony offers a much-needed reminder to slow down 
              and appreciate the simple things. It teaches us that true luxury lies not in extravagance, 
              but in the ability to be fully present in each moment, finding peace in the simple act 
              of preparing and sharing tea.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-between items-center"
          >
            <Link href="/stories/sacred-dance-paro">
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                Previous Story
              </button>
            </Link>
            <Link href="/stories/voices-of-mountains">
              <button className="px-6 py-2 bg-[#1a237e] text-white rounded-full hover:bg-[#1a237e]/90 transition-colors">
                Next Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 