'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Book, Users, Heart } from 'lucide-react';

const culturalFacts = [
  {
    title: 'Traditional Celebrations',
    image: '/images/culture/hero-collage.jpg',
    description: 'Explore the vibrant festivals and ceremonies that mark important moments in different cultures.',
    facts: [
      'Diwali - Festival of Lights in India',
      'Chinese New Year celebrations',
      'Day of the Dead in Mexico',
      'Songkran Water Festival in Thailand'
    ]
  },
  {
    title: 'Cultural Heritage',
    image: '/images/culture/japanese-bow.jpg',
    description: 'Discover the rich traditions and customs that have been passed down through generations.',
    facts: [
      'Japanese Tea Ceremony',
      'African Tribal Dances',
      'European Folk Music',
      'Native American Storytelling'
    ]
  },
  {
    title: 'Social Norms',
    image: '/images/culture/india-gratitude.jpg',
    description: 'Learn about the unique social customs and etiquette that shape daily interactions.',
    facts: [
      'Greeting customs worldwide',
      'Dining etiquette differences',
      'Gift-giving traditions',
      'Personal space variations'
    ]
  }
];

export default function CulturalFactsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f8e3d6] to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/culture/japan-happiness.jpg"
          alt="Cultural traditions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Cultural Facts & Traditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Embark on a journey through the fascinating world of global cultures and traditions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culturalFacts.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.facts.map((fact, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <Globe className="w-5 h-5 text-[#301307]" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 