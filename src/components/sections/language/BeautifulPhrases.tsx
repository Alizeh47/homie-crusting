'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart, FaLanguage } from 'react-icons/fa';

interface Phrase {
  id: number;
  phrase: string;
  translation: string;
  language: string;
  context: string;
  category: 'happiness' | 'nostalgia' | 'love' | 'wisdom' | 'peace' | 'friendship';
}

const phrases: Phrase[] = [
  {
    id: 1,
    phrase: "La vie est belle",
    translation: "Life is beautiful",
    language: "French",
    context: "Used to express joy and appreciation for life's simple pleasures",
    category: "happiness"
  },
  {
    id: 2,
    phrase: "Fernweh",
    translation: "Distance pain",
    language: "German",
    context: "A longing for far-off places, especially those you've never been to",
    category: "nostalgia"
  },
  {
    id: 3,
    phrase: "生きがい",
    translation: "Ikigai",
    language: "Japanese",
    context: "A reason for being; the thing that gets you up in the morning",
    category: "love"
  },
  {
    id: 4,
    phrase: "Lagom",
    translation: "Just the right amount",
    language: "Swedish",
    context: "The art of balanced living - not too much, not too little, but just perfect",
    category: "wisdom"
  },
  {
    id: 5,
    phrase: "Shemomechama",
    translation: "I ate the whole thing",
    language: "Georgian",
    context: "When something is so delicious you can't stop eating it even though you're full",
    category: "happiness"
  },
  {
    id: 6,
    phrase: "Ubuntu",
    translation: "I am because we are",
    language: "Zulu",
    context: "The belief in a universal bond of sharing that connects all humanity",
    category: "friendship"
  }
];

const categoryColors = {
  happiness: 'from-yellow-400 to-orange-500',
  nostalgia: 'from-blue-400 to-purple-500',
  love: 'from-pink-400 to-red-500',
  wisdom: 'from-green-400 to-teal-500',
  peace: 'from-blue-300 to-indigo-500',
  friendship: 'from-purple-400 to-pink-500'
};

const BeautifulPhrases = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const scrollToIndex = (index: number) => {
    if (containerRef.current && !isAnimating) {
      setIsAnimating(true);
      const container = containerRef.current;
      const cards = container.getElementsByClassName('phrase-card');
      if (cards[index]) {
        cards[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const nextSlide = () => {
    if (!isAnimating) {
      const newIndex = (activeIndex + 1) % phrases.length;
      setActiveIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      const newIndex = (activeIndex - 1 + phrases.length) % phrases.length;
      setActiveIndex(newIndex);
      scrollToIndex(newIndex);
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full bg-current opacity-10"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Beautiful Phrases from Different Languages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the poetry of languages through these carefully curated phrases that capture
            the essence of human emotions.
          </p>
        </motion.div>

        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg
                     hover:bg-gray-100 transition-colors"
            disabled={isAnimating}
          >
            <FaChevronLeft className="text-gray-600" size={24} />
          </motion.button>

          <div
            ref={containerRef}
            className="overflow-x-hidden relative"
          >
            <div className="flex gap-6 transition-transform duration-500 ease-out py-8">
              <AnimatePresence mode="wait">
                {phrases.map((phrase, index) => (
                  <motion.div
                    key={phrase.id}
                    className={`phrase-card flex-shrink-0 w-full md:w-[600px] p-8 rounded-xl shadow-lg
                             bg-gradient-to-br ${categoryColors[phrase.category]}`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                          {phrase.category.charAt(0).toUpperCase() + phrase.category.slice(1)}
                        </span>
                        <FaLanguage size={24} className="text-white/80" />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">{phrase.phrase}</h3>
                      <p className="text-xl mb-4 italic">"{phrase.translation}"</p>
                      <div className="flex items-center gap-2 mb-2">
                        <FaHeart className="text-white/80" />
                        <p className="text-lg">{phrase.language}</p>
                      </div>
                      <p className="text-white/90 text-lg">{phrase.context}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg
                     hover:bg-gray-100 transition-colors"
            disabled={isAnimating}
          >
            <FaChevronRight className="text-gray-600" size={24} />
          </motion.button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {phrases.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                if (!isAnimating) {
                  setActiveIndex(index);
                  scrollToIndex(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125' 
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautifulPhrases; 