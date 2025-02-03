'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Smile, Coffee, Star } from 'lucide-react';

interface EmotionalDish {
  id: string;
  emotion: string;
  icon: JSX.Element;
  dishes: {
    name: string;
    origin: string;
    description: string;
    image: string;
  }[];
}

const emotionalDishes: EmotionalDish[] = [
  {
    id: 'comfort',
    emotion: 'Comfort & Nostalgia',
    icon: <Coffee className="w-6 h-6" />,
    dishes: [
      {
        name: 'Japanese Ramen',
        origin: 'Japan',
        description: 'A warm bowl of comfort that soothes the soul on cold days.',
        image: '/images/food/ramen.jpg',
      },
      {
        name: 'Italian Pasta',
        origin: 'Italy',
        description: 'Simple yet satisfying, reminiscent of family gatherings.',
        image: '/images/food/carbonara.jpg',
      },
    ],
  },
  {
    id: 'joy',
    emotion: 'Celebration & Joy',
    icon: <Smile className="w-6 h-6" />,
    dishes: [
      {
        name: 'French Macarons',
        origin: 'France',
        description: 'Colorful bites of happiness that brighten any occasion.',
        image: '/images/food/macarons.jpg',
      },
      {
        name: 'Indian Sweets',
        origin: 'India',
        description: 'Traditional delicacies that mark festive celebrations.',
        image: '/images/food/gulab-jamun.jpg',
      },
    ],
  },
  {
    id: 'romance',
    emotion: 'Love & Romance',
    icon: <Heart className="w-6 h-6" />,
    dishes: [
      {
        name: 'Dark Chocolate',
        origin: 'Belgium',
        description: 'Rich and indulgent, perfect for romantic moments.',
        image: '/images/food/chocolate.jpg',
      },
      {
        name: 'Strawberry Dessert',
        origin: 'Global',
        description: "Nature's sweet gift, symbolizing love and passion.",
        image: '/images/food/strawberry-dessert.jpg',
      },
    ],
  },
];

export function FoodEmotions() {
  const [selectedEmotion, setSelectedEmotion] = useState<string>(emotionalDishes[0].id);

  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Food & Emotions: A Universal Connection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how different foods evoke emotions and create lasting memories across cultures.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Emotion Selector */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-4">
              {emotionalDishes.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedEmotion(item.id)}
                  className={`w-full p-6 rounded-xl flex items-center gap-4 transition-all ${
                    selectedEmotion === item.id
                      ? 'bg-[#001B3A] text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-[#001B3A]/5'
                  }`}
                >
                  <div className={`${
                    selectedEmotion === item.id ? 'text-white' : 'text-[#001B3A]'
                  }`}>
                    {item.icon}
                  </div>
                  <span className="text-lg font-medium">{item.emotion}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dishes Display */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEmotion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {emotionalDishes
                  .find((item) => item.id === selectedEmotion)
                  ?.dishes.map((dish, index) => (
                    <motion.div
                      key={dish.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="relative h-48">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">
                            {dish.name}
                          </h3>
                          <span className="text-sm text-[#001B3A] font-medium">
                            {dish.origin}
                          </span>
                        </div>
                        <p className="text-gray-600">
                          {dish.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 