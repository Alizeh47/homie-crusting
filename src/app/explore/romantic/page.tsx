'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function RomanticPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E3F2FD]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/categories/romantic.jpg"
            alt="Romantic destinations"
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
            Romantic Escapes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            Discover intimate settings and magical moments that create lasting memories with your loved one.
          </motion.p>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-[#1a237e]"
          >
            Romantic Experiences
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Sunset Tea Ceremony",
                description: "Experience the tranquil beauty of a traditional tea ceremony as the sun sets, creating an intimate atmosphere perfect for couples.",
                image: "/images/emotions/moroccan-tea.jpg",
                details: "Immerse yourself in the art of tea preparation while enjoying breathtaking views."
              },
              {
                title: "Nordic Winter Magic",
                description: "Cuddle under the Northern Lights in a glass igloo, surrounded by pristine snow and starlit skies.",
                image: "/images/emotions/nordic-winter.jpg",
                details: "Watch the aurora borealis dance across the sky from the comfort of your private sanctuary."
              },
              {
                title: "Cultural Dance Experience",
                description: "Learn traditional couple dances from around the world, connecting through movement and music.",
                image: "/images/emotions/dancing.jpg",
                details: "From tango to waltz, express your love through the universal language of dance."
              },
              {
                title: "Lantern-lit Evenings",
                description: "Wander through ancient streets illuminated by traditional lanterns, creating a magical atmosphere.",
                image: "/images/culture/lantern.jpg",
                details: "Experience the romance of old-world charm in historic cultural settings."
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

      {/* Romantic Tips Section */}
      <section className="py-20 bg-[#1a237e]/5">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]"
          >
            Creating Perfect Moments
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Best Times to Visit",
                content: "Plan your visit during shoulder seasons for fewer crowds and more intimate experiences. Spring and early autumn offer perfect weather for outdoor activities."
              },
              {
                title: "Local Customs",
                content: "Research and respect local romantic customs. Many cultures have unique traditions around love and relationships that can add depth to your experience."
              },
              {
                title: "Photography Tips",
                content: "Capture your special moments during golden hour for the most flattering natural light. Don't forget to put the camera down sometimes and simply be present."
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