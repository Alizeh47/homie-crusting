'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Globe, Info, AlertCircle } from 'lucide-react';

const etiquettes = [
  {
    region: 'East Asia',
    image: '/images/culture/japanese-bow.jpg',
    customs: [
      {
        title: 'No Tipping in Japan',
        description: 'In Japanese culture, tipping is considered rude as exceptional service is the standard.',
        icon: '🥢',
        importance: 'High'
      },
      {
        title: 'Business Card Exchange',
        description: 'Present and receive business cards with both hands and a slight bow.',
        icon: '💼',
        importance: 'High'
      },
      {
        title: 'Shoes Off Indoors',
        description: 'Remove shoes before entering homes and many traditional establishments.',
        icon: '👞',
        importance: 'Essential'
      }
    ]
  },
  {
    region: 'South Asia',
    image: '/images/culture/india-gratitude.jpg',
    customs: [
      {
        title: 'Left Hand Etiquette',
        description: 'Avoid using the left hand for eating or passing items.',
        icon: '🤚',
        importance: 'High'
      },
      {
        title: 'Head Gestures',
        description: 'The famous Indian head wobble can mean yes, no, or maybe.',
        icon: '🤔',
        importance: 'Medium'
      },
      {
        title: 'Elder Respect',
        description: 'Touch elders\' feet as a sign of respect and seek blessings.',
        icon: '🙏',
        importance: 'High'
      }
    ]
  },
  {
    region: 'Middle East',
    image: '/images/culture/holi.jpg',
    customs: [
      {
        title: 'Right Hand Use',
        description: 'Use right hand for eating and passing items.',
        icon: '✋',
        importance: 'Essential'
      },
      {
        title: 'Public Behavior',
        description: 'Conservative dress and behavior is appreciated.',
        icon: '👔',
        importance: 'High'
      },
      {
        title: 'Ramadan Respect',
        description: 'Avoid eating in public during Ramadan fasting hours.',
        icon: '🌙',
        importance: 'Essential'
      }
    ]
  }
];

export default function CulturalEtiquettesPage() {
  return (
    <main className="min-h-screen bg-[#757968]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="/images/culture/japan-happiness.jpg"
          alt="Cultural etiquettes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Global Cultural Etiquettes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Understanding and respecting cultural differences is key to meaningful cross-cultural interactions.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {etiquettes.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={region.image}
                    alt={region.region}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                    {region.region}
                  </h2>
                </div>
                <div className="p-6">
                  {region.customs.map((custom, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{custom.icon}</span>
                        <h3 className="text-xl font-bold text-gray-800">{custom.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-2">{custom.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <AlertCircle className="w-4 h-4 text-[#757968]" />
                        <span className="text-[#757968] font-medium">
                          Importance: {custom.importance}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 