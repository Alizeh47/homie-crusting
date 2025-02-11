'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const customs = [
  {
    title: 'No Tipping in Japan',
    description: 'In Japanese culture, tipping is considered rude as exceptional service is the standard. The act of offering a tip might even be seen as insulting.',
    icon: '🥢',
    image: '/images/culture/japanese-bow.jpg',
    color: '#E8D5C4'
  },
  {
    title: 'Left Hand Etiquette in India',
    description: 'Using your left hand for eating or passing items is considered impolite in Indian culture, as it\'s traditionally reserved for personal hygiene.',
    icon: '🤚',
    image: '/images/culture/india-gratitude.jpg',
    color: '#DED0B6'
  },
  {
    title: 'Eye Contact Customs',
    description: 'While direct eye contact is valued in Western cultures, many Asian and African cultures consider prolonged eye contact disrespectful or aggressive.',
    icon: '👁️',
    image: '/images/culture/african-joy.jpg',
    color: '#B2A59B'
  }
];

export default function CustomsEtiquettes() {
  return (
    <section className="py-32 my-20" style={{ backgroundColor: '#757968' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center md:text-5xl"
          style={{ color: '#E8D5C4' }}
        >
          Customs & Etiquettes That May Surprise You
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {customs.map((custom, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
              style={{ 
                backgroundColor: custom.color,
                borderRadius: index % 2 === 0 ? '60px 20px' : '20px 60px',
                transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)`
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={custom.image}
                  alt={custom.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <span className="text-3xl">{custom.icon}</span>
                </div>
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {custom.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {custom.description}
                </p>
                <Link
                  href={`/culture/etiquettes#${custom.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-gray-800 font-semibold group"
                >
                  Learn More
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>

              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <div className="text-white text-center p-8">
                  <p className="text-lg font-light italic">
                    "Understanding cultural etiquette bridges gaps and builds respect across cultures."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/culture/etiquettes"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-300 group inline-flex items-center"
          >
            Explore More Cultural Etiquettes
            <span className="ml-2 inline-block transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 