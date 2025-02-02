'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const regions = [
  {
    id: 'asia',
    name: 'Asia',
    description: 'Discover ancient traditions and spiritual journeys',
    destinations: [
      {
        name: "Tiger's Nest Monastery",
        image: '/images/destinations/tigers-nest.jpg',
        description: 'Experience the mystical Buddhist monastery of Bhutan',
      },
      {
        name: 'Kyoto',
        image: '/images/destinations/kyoto.jpg',
        description: 'Where tradition meets innovation in ancient Japan',
      },
    ],
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'Explore centuries of art, culture, and history',
    destinations: [
      {
        name: 'Amalfi Coast',
        image: '/images/destinations/amalfi.jpg',
        description: 'Stunning cliffs, azure waters, and Italian charm',
      },
      {
        name: 'Kyoto in Winter',
        image: '/images/destinations/kyoto-winter.jpg',
        description: 'Experience the serene beauty of snow-covered temples',
      },
    ],
  },
  {
    id: 'asia_pacific',
    name: 'Asia Pacific',
    description: 'From ancient temples to tropical paradises',
    destinations: [
      {
        name: 'Bali',
        image: '/images/destinations/bali.jpg',
        description: 'Island of the Gods with rich cultural heritage',
      },
      {
        name: 'Cappadocia',
        image: '/images/destinations/cappadocia.jpg',
        description: 'Otherworldly landscapes and ancient cave dwellings',
      },
    ],
  },
  {
    id: 'cultural_routes',
    name: 'Cultural Routes',
    description: 'Journey through the most iconic cultural destinations',
    destinations: [
      {
        name: 'Ancient Kyoto',
        image: '/images/destinations/kyoto.jpg',
        description: 'Timeless temples and traditional gardens',
      },
      {
        name: 'Mediterranean Coast',
        image: '/images/destinations/amalfi.jpg',
        description: 'Where history meets coastal beauty',
      },
    ],
  },
];

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const getRegionPosition = (id: string) => {
    switch (id) {
      case 'asia':
        return 'right-[45%] top-[45%]';
      case 'europe':
        return 'left-[45%] top-[40%]';
      case 'asia_pacific':
        return 'right-[40%] top-[50%]';
      case 'cultural_routes':
        return 'left-[40%] top-[45%]';
      default:
        return '';
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Explore Destinations
        </motion.h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-600">
          Click on any region to discover unique cultural experiences and emotional journeys around the
          world.
        </p>

        {/* World Map */}
        <div className="relative mx-auto mb-8 aspect-[3/1] max-w-[90vw]">
          <Image
            src="/images/backgrounds/map.png"
            alt="World Map"
            fill
            className="object-cover"
            priority
          />
          {/* Interactive Regions */}
          {regions.map((region) => (
            <motion.button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`absolute transition-all hover:scale-110 ${getRegionPosition(region.id)}`}
              whileHover={{ scale: 1.2 }}
              animate={{
                boxShadow: selectedRegion === region.id
                  ? ['0 0 0 rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.5)', '0 0 0 rgba(59, 130, 246, 0)']
                  : 'none'
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                },
                scale: {
                  duration: 0.2
                }
              }}
            >
              <div className="relative">
                <div
                  className={`h-6 w-6 rounded-full transition-all ${
                    selectedRegion === region.id
                      ? 'bg-[#05081c] shadow-lg shadow-[#05081c]/50'
                      : 'bg-[#05081c]/70 hover:bg-[#05081c]'
                  }`}
                />
                {selectedRegion === region.id && (
                  <div className="absolute -inset-1 animate-ping rounded-full bg-[#05081c]/40 opacity-75" />
                )}
                <div className="absolute -inset-2 animate-pulse rounded-full bg-[#05081c]/20" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Region Information */}
        <AnimatePresence mode="wait">
          {selectedRegion && (
            <motion.div
              key={selectedRegion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-xl"
            >
              {regions
                .filter((region) => region.id === selectedRegion)
                .map((region) => (
                  <div key={region.id}>
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">{region.name}</h3>
                    <p className="mb-6 text-gray-600">{region.description}</p>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      {region.destinations.map((destination) => (
                        <div
                          key={destination.name}
                          className="group overflow-hidden rounded-lg shadow-md transition-all hover:-translate-y-1"
                        >
                          <div className="relative h-48">
                            <Image
                              src={destination.image}
                              alt={destination.name}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="mb-2 text-xl font-bold text-gray-900">
                              {destination.name}
                            </h4>
                            <p className="text-gray-600">{destination.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 