'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './EmotionalExpressions.module.css';

const expressions = [
  {
    title: 'Happiness in Japan – Bowing and Gifts',
    image: '/images/culture/japan-happiness.jpg',
    description: 'In Japan, happiness is often expressed through the act of gift-giving and respectful bowing, emphasizing the joy of giving rather than receiving.',
    color: '#E8D5C4'  // warm beige
  },
  {
    title: 'Grief in Mexico – Día de los Muertos',
    image: '/images/culture/dia-muertos.jpg',
    description: 'Rather than mourning in black, Mexicans celebrate the lives of departed loved ones with vibrant colors, music, and festive gatherings.',
    color: '#DED0B6'  // light olive
  },
  {
    title: 'Love in France – The Art of Letter Writing',
    image: '/images/culture/french-letters.jpg',
    description: 'The French tradition of expressing love through handwritten letters continues to thrive, viewing it as an art form of emotional expression.',
    color: '#B2A59B'  // muted brown
  },
  {
    title: 'Gratitude in India – Touching Feet',
    image: '/images/culture/india-gratitude.jpg',
    description: 'In Indian culture, touching the feet of elders is a profound expression of gratitude and respect, symbolizing the passing of wisdom between generations.',
    color: '#C7BCA1'  // warm sand
  },
  {
    title: 'Joy in African Cultures – Ululation',
    image: '/images/culture/african-joy.jpg',
    description: 'The practice of ululation - a high-pitched vocal sound - is used across many African cultures to express extreme joy and celebration at special occasions.',
    color: '#D1C0A8'  // dusty rose
  },
  {
    title: 'Contentment in Nordic Hygge',
    image: '/images/culture/nordic-hygge.jpg',
    description: 'The Danish concept of Hygge represents finding joy in coziness and contentment, often expressed through intimate gatherings and creating warm, welcoming spaces.',
    color: '#E6D5B8'  // soft cream
  }
];

export default function EmotionalExpressions() {
  const [currentSet, setCurrentSet] = useState(0);
  const cardsPerSet = 3;
  const totalSets = Math.ceil(expressions.length / cardsPerSet);

  const currentCards = expressions.slice(
    currentSet * cardsPerSet,
    (currentSet + 1) * cardsPerSet
  );

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % totalSets);
  };

  const prevSet = () => {
    setCurrentSet((prev) => (prev - 1 + totalSets) % totalSets);
  };

  return (
    <section className="py-20 relative" style={{ backgroundColor: '#22463a' }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-left md:text-5xl"
          style={{ color: '#1b130f' }}
        >
          How Different Cultures Express Emotions
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSet}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex gap-8"
            >
              {currentCards.map((expression, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1 overflow-hidden group"
                  style={{ 
                    backgroundColor: expression.color,
                    borderRadius: index % 2 === 0 ? '60px 20px' : '20px 60px',
                    transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)`
                  }}
                >
                  <div className="relative h-56">
                    <Image
                      src={expression.image}
                      alt={expression.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{expression.title}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">{expression.description}</p>
                    <button className="text-gray-800 font-semibold hover:underline group inline-flex items-center">
                      Read More 
                      <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevSet}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 backdrop-blur-sm transition-all"
            style={{ transform: 'translateY(-50%) translateX(-3rem)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSet}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 backdrop-blur-sm transition-all"
            style={{ transform: 'translateY(-50%) translateX(3rem)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSet === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 