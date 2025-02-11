'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E3F2FD]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/categories/wellness.jpg"
            alt="Wellness destinations"
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
            Wellness & Rejuvenation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Discover serene destinations where mind, body, and soul find perfect harmony and restoration.
          </motion.p>
        </div>
      </section>

      {/* Wellness Experiences */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-[#1a237e]"
          >
            Wellness Experiences
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Nordic Hygge Retreat",
                description: "Experience the cozy comfort of Nordic wellness traditions in pristine natural settings.",
                image: "/images/culture/nordic-hygge.jpg",
                details: "From saunas to forest bathing, discover the secrets of Scandinavian well-being."
              },
              {
                title: "Japanese Onsen",
                description: "Immerse yourself in the healing waters of traditional Japanese hot springs.",
                image: "/images/culture/japan-happiness.jpg",
                details: "Learn about centuries-old bathing rituals and their health benefits."
              },
              {
                title: "Mediterranean Wellness",
                description: "Embrace the healthy Mediterranean lifestyle through food, movement, and relaxation.",
                image: "/images/culture/italian-gestures.jpg",
                details: "Experience the perfect blend of nutrition, activity, and rest."
              },
              {
                title: "Mindful Movement",
                description: "Practice ancient and modern movement traditions in inspiring locations.",
                image: "/images/emotions/dancing.jpg",
                details: "From yoga to tai chi, connect with your body through mindful practice."
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

      {/* Wellness Tips */}
      <section className="py-20 bg-[#1a237e]/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]"
          >
            Wellness Wisdom
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Holistic Balance",
                content: "True wellness comes from balancing physical health, mental peace, and emotional well-being. Each destination offers unique ways to achieve this harmony."
              },
              {
                title: "Cultural Integration",
                content: "Learn from traditional wellness practices that have stood the test of time. Each culture offers unique perspectives on health and happiness."
              },
              {
                title: "Sustainable Self-Care",
                content: "Develop practices and routines that you can incorporate into your daily life back home, creating lasting positive changes."
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