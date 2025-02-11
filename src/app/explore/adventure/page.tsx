'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AdventurePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E3F2FD]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/categories/adventure.jpg"
            alt="Adventure destinations"
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
            Adventure Awaits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Push your boundaries and discover thrilling experiences that will create unforgettable memories.
          </motion.p>
        </div>
      </section>

      {/* Adventure Experiences */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-[#1a237e]"
          >
            Epic Adventures
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Mountain Expeditions",
                description: "Scale majestic peaks and trek through challenging terrains in the world's most stunning mountain ranges.",
                image: "/images/culture/hero.jpg",
                details: "Expert guides lead you through carefully planned routes, ensuring both safety and excitement."
              },
              {
                title: "Desert Safari",
                description: "Experience the thrill of dune bashing and starlit camping in vast desert landscapes.",
                image: "/images/culture/mongolian-whisper.jpg",
                details: "Discover the magic of desert life and traditional Bedouin culture."
              },
              {
                title: "Rainforest Exploration",
                description: "Journey through dense rainforests, discovering exotic wildlife and hidden waterfalls.",
                image: "/images/culture/african-joy.jpg",
                details: "Learn survival skills and connect with indigenous communities."
              },
              {
                title: "Ocean Adventures",
                description: "Dive into crystal-clear waters to explore vibrant coral reefs and marine life.",
                image: "/images/culture/hero-collage.jpg",
                details: "From scuba diving to sailing, experience the best of ocean adventures."
              }
            ].map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-xl"
              >
                <div className="relative h-72">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-[#1a237e]">{experience.title}</h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  <div className="bg-[#E3F2FD] p-4 rounded-lg">
                    <p className="text-sm text-[#1a237e]">{experience.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adventure Tips */}
      <section className="py-20 bg-[#1a237e]/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]"
          >
            Adventure Essentials
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Safety First",
                content: "Always check weather conditions, carry proper gear, and follow local guidelines. Adventure is about calculated risks, not recklessness."
              },
              {
                title: "Physical Preparation",
                content: "Build your endurance and strength before your adventure. Many experiences require good physical condition for maximum enjoyment."
              },
              {
                title: "Environmental Impact",
                content: "Practice Leave No Trace principles. Respect wildlife and local ecosystems to preserve these adventures for future generations."
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-[#1a237e]">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 