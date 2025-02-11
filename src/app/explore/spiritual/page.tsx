'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SpiritualPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E3F2FD]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/categories/spiritual.jpg"
            alt="Spiritual journey"
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
            Spiritual Journeys
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Embark on a transformative journey to discover inner peace and spiritual enlightenment.
          </motion.p>
        </div>
      </section>

      {/* Sacred Experiences */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-[#1a237e]"
          >
            Sacred Experiences
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Japanese Zen Gardens",
                description: "Find tranquility in meticulously maintained Zen gardens, where every stone and plant holds deep spiritual meaning.",
                image: "/images/culture/japanese-bow.jpg",
                details: "Learn the art of meditation and mindfulness in these sacred spaces."
              },
              {
                title: "Ancient Temple Rituals",
                description: "Participate in traditional ceremonies and rituals that have been practiced for centuries.",
                image: "/images/culture/lantern.jpg",
                details: "Experience the power of ancient spiritual practices guided by local monks."
              },
              {
                title: "Himalayan Meditation",
                description: "Practice meditation in the serene heights of the Himalayas, surrounded by pristine nature.",
                image: "/images/culture/india-gratitude.jpg",
                details: "Learn from experienced practitioners in the birthplace of ancient wisdom."
              },
              {
                title: "Sacred Music & Chants",
                description: "Immerse yourself in the healing vibrations of sacred music and traditional chants.",
                image: "/images/culture/mongolian-whisper.jpg",
                details: "Experience the transformative power of sound in spiritual practices."
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

      {/* Spiritual Practices */}
      <section className="py-20 bg-[#1a237e]/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]"
          >
            Spiritual Practices
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Meditation Techniques",
                content: "Learn various meditation techniques from different spiritual traditions, from mindfulness to transcendental meditation."
              },
              {
                title: "Sacred Rituals",
                content: "Understand and participate in sacred rituals that have been preserved through generations, connecting past and present."
              },
              {
                title: "Mindful Living",
                content: "Discover how to incorporate spiritual practices into daily life, creating a sustainable path to inner peace."
              }
            ].map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-[#1a237e]">{practice.title}</h3>
                <p className="text-gray-600">{practice.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 