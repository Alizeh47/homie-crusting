'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function VoicesOfMountainsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E8F5E9]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stories/voices-of-mountains.jpg"
            alt="Tibetan Mountains"
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
            Voices of the Mountains
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Ancient echoes in the Himalayan heights
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
            <p className="text-green-600 font-semibold uppercase tracking-wider mb-2">Tibet</p>
            <p className="text-gray-600">Autumn Harvest</p>
          </motion.div>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <p>
              High in the Himalayas, where the air is thin and the sky seems close enough to touch, 
              an ancient practice continues to echo through the valleys. The throat singing of Tibetan 
              monks is more than just a musical tradition—it's a bridge between the physical and 
              spiritual realms, carrying centuries of wisdom on its resonant waves.
            </p>

            <div className="my-12 relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/stories/monastery.jpg"
                alt="Tibetan monastery in the mountains"
                fill
                className="object-cover"
              />
            </div>

            <h2>Sacred Sounds</h2>
            <p>
              The practice of throat singing, or overtone singing, is a remarkable feat where monks 
              produce multiple pitches simultaneously. Each note carries specific spiritual significance, 
              creating harmonies that are believed to align with the natural frequencies of the universe. 
              These sounds have been passed down through generations, preserving ancient knowledge in 
              their vibrations.
            </p>

            <h2>Mountain Meditation</h2>
            <p>
              In the crisp mountain air, these sacred sounds take on new dimensions. The acoustics of 
              the valleys and peaks create natural amphitheaters, where the monks' chants blend with 
              the whispers of the wind and the distant calls of snow leopards, creating a symphony 
              that speaks to the deep connection between human spirituality and the natural world.
            </p>

            <div className="my-12 relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/stories/monks.jpg"
                alt="Tibetan monks practicing throat singing"
                fill
                className="object-cover"
              />
            </div>

            <h2>Preserving Tradition</h2>
            <p>
              Despite the challenges of modernization, young monks continue to learn these ancient 
              practices, ensuring that the voices of the mountains will not be silenced. The 
              dedication required to master throat singing—often taking years of practice—speaks 
              to the deep reverence for this spiritual art form.
            </p>

            <h2>Universal Resonance</h2>
            <p>
              What makes this practice truly remarkable is its ability to touch people regardless 
              of their cultural background. Visitors from around the world often describe feeling 
              a profound sense of peace and connection when experiencing these sacred sounds, 
              demonstrating how some experiences transcend language and cultural barriers to 
              speak directly to the human spirit.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-between items-center"
          >
            <Link href="/stories/tea-ceremony-wisdom">
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                Previous Story
              </button>
            </Link>
            <Link href="/travel">
              <button className="px-6 py-2 bg-[#1a237e] text-white rounded-full hover:bg-[#1a237e]/90 transition-colors">
                Back to Stories
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 