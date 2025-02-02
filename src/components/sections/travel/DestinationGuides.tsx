'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaCoins, FaGem, FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const destinations = [
  {
    id: 1,
    name: "Tiger's Nest Monastery",
    location: 'Bhutan',
    image: '/images/destinations/tigers-nest.jpg',
    bestTime: 'March to May, September to November',
    budget: '$200-300 per day',
    hiddenGems: 'Secret meditation caves, ancient prayer wheels, hidden hiking trails',
    experiences: 'Guided meditation sessions, traditional butter tea ceremony, local monk interactions',
  },
  {
    id: 2,
    name: 'Kyoto Traditional District',
    location: 'Japan',
    image: '/images/destinations/kyoto.jpg',
    bestTime: 'March-May (Cherry Blossoms) and October-November (Fall Colors)',
    budget: '$150-250 per day',
    hiddenGems: 'Hidden tea houses, secret bamboo groves, lesser-known temples',
    experiences: 'Tea ceremony workshops, geisha district tours, zen garden meditation',
  },
  {
    id: 3,
    name: 'Amalfi Coast',
    location: 'Italy',
    image: '/images/destinations/amalfi.jpg',
    bestTime: 'May to October',
    budget: '$180-300 per day',
    hiddenGems: 'Hidden beaches, family-run limoncello farms, ancient paper mills',
    experiences: 'Cooking classes with local nonnas, sunset boat tours, wine tasting in historic cellars',
  },
  {
    id: 4,
    name: 'Cappadocia',
    location: 'Turkey',
    image: '/images/destinations/cappadocia.jpg',
    bestTime: 'April to June, September to November',
    budget: '$100-200 per day',
    hiddenGems: 'Underground cities, hidden cave churches, local pottery workshops',
    experiences: 'Hot air balloon rides, traditional hammam visits, underground wine tasting',
  },
  {
    id: 5,
    name: 'Machu Picchu',
    location: 'Peru',
    image: '/images/destinations/machu-picchu.jpg',
    bestTime: 'May to October (Dry Season)',
    budget: '$150-250 per day',
    hiddenGems: 'Lesser-known Inca trails, hidden terraces, local mountain villages',
    experiences: 'Traditional weaving workshops, coca leaf readings, ancient ritual ceremonies',
  }
];

const tabs = [
  { id: 'time', label: 'Best Time to Visit', icon: FaSun },
  { id: 'budget', label: 'Budget Estimation', icon: FaCoins },
  { id: 'gems', label: 'Hidden Gems', icon: FaGem },
  { id: 'experiences', label: 'Local Experiences', icon: FaHeart },
];

export default function DestinationGuides() {
  const [activeTab, setActiveTab] = useState('time');
  const [currentDestIndex, setCurrentDestIndex] = useState(0);
  const selectedDestination = destinations[currentDestIndex];

  const nextDestination = () => {
    setCurrentDestIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevDestination = () => {
    setCurrentDestIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  const getTabContent = (destination: typeof destinations[0]) => {
    switch (activeTab) {
      case 'time':
        return destination.bestTime;
      case 'budget':
        return destination.budget;
      case 'gems':
        return destination.hiddenGems;
      case 'experiences':
        return destination.experiences;
      default:
        return '';
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Destination Guide
        </motion.h2>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Navigation Buttons */}
          <button
            onClick={prevDestination}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-800 shadow-lg transition-all hover:bg-white hover:scale-110"
            aria-label="Previous destination"
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextDestination}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-800 shadow-lg transition-all hover:bg-white hover:scale-110"
            aria-label="Next destination"
          >
            <FaChevronRight className="h-6 w-6" />
          </button>

          {/* Destination Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDestIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-full">
                <Image
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-6 text-white"
                >
                  <h3 className="text-2xl font-bold">{selectedDestination.name}</h3>
                  <p className="text-lg">{selectedDestination.location}</p>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Tabs */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <motion.button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                          activeTab === tab.id
                            ? 'bg-gray-900 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentDestIndex}-${activeTab}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="prose prose-lg"
                  >
                    <p className="text-gray-600">{getTabContent(selectedDestination)}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Destination Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentDestIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentDestIndex === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to destination ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 