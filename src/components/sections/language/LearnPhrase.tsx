'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaVolumeUp, FaCheck, FaStar } from 'react-icons/fa';
import Image from 'next/image';

interface Phrase {
  id: number;
  phrase: string;
  translation: string;
  language: string;
  pronunciation: string;
  audioUrl: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

const phrases: Phrase[] = [
  {
    id: 1,
    phrase: "Je ne sais quoi",
    translation: "An indefinable, elusive quality",
    language: "French",
    pronunciation: "zhuh nuh say kwah",
    audioUrl: "/audio/je-ne-sais-quoi.mp3",
    difficulty: "medium",
    category: "Expressions"
  },
  {
    id: 2,
    phrase: "Pura vida",
    translation: "Pure life",
    language: "Spanish",
    pronunciation: "poo-rah vee-dah",
    audioUrl: "/audio/pura-vida.mp3",
    difficulty: "easy",
    category: "Lifestyle"
  },
  {
    id: 3,
    phrase: "Wabi-sabi",
    translation: "Finding beauty in imperfection",
    language: "Japanese",
    pronunciation: "wah-bee sah-bee",
    audioUrl: "/audio/wabi-sabi.mp3",
    difficulty: "medium",
    category: "Philosophy"
  },
  {
    id: 4,
    phrase: "Gemütlichkeit",
    translation: "A state of warmth, friendliness, and good cheer",
    language: "German",
    pronunciation: "geh-moot-lish-kite",
    audioUrl: "/audio/gemutlichkeit.mp3",
    difficulty: "hard",
    category: "Emotions"
  },
  {
    id: 5,
    phrase: "Sisu",
    translation: "Extraordinary determination in the face of adversity",
    language: "Finnish",
    pronunciation: "see-soo",
    audioUrl: "/audio/sisu.mp3",
    difficulty: "easy",
    category: "Character"
  },
  {
    id: 6,
    phrase: "Dolce far niente",
    translation: "The sweetness of doing nothing",
    language: "Italian",
    pronunciation: "dol-che far nee-en-teh",
    audioUrl: "/audio/dolce-far-niente.mp3",
    difficulty: "medium",
    category: "Lifestyle"
  }
];

const starVariants = {
  animate: {
    scale: [1, 1.3, 1],
    rotate: [0, 180],
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

interface StarProps {
  className: string;
  style?: React.CSSProperties;
}

const Star = ({ className, style }: StarProps) => (
  <motion.div
    variants={starVariants}
    animate="animate"
    className={`absolute text-white/40 ${className}`}
    style={style}
  >
    <FaStar />
  </motion.div>
);

const LearnPhrase = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const currentPhrase = phrases[currentPhraseIndex];

  const handleNext = () => {
    const nextIndex = (currentPhraseIndex + 1) % phrases.length;
    setCurrentPhraseIndex(nextIndex);
    setIsRevealed(false);
    setProgress((prev) => Math.min(100, prev + (100 / phrases.length)));
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/language/watercolor-bg.jpg"
          alt="Watercolor Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 to-purple-900/60 backdrop-blur-[1px]" />
      </div>

      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-purple-900/10" />
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className={`text-${i % 2 ? 'xl' : '2xl'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))'
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
          <h2 className="text-4xl font-bold text-black mb-4">
            Learn a New Phrase
          </h2>
          <p className="text-xl text-black/80 max-w-2xl mx-auto">
            Master beautiful expressions from around the world, one phrase at a time.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/20 backdrop-blur-sm rounded-full mb-8 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Phrase Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhrase.id}
              initial={{ opacity: 0, y: 20, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 15 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform-gpu"
              style={{
                perspective: '1000px',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-2">
                  <span className="px-3 py-1 text-sm font-medium text-purple-600 bg-purple-100 rounded-full">
                    {currentPhrase.language}
                  </span>
                  <span className="ml-2 px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                    {currentPhrase.difficulty}
                  </span>
                  <span className="ml-2 px-3 py-1 text-sm font-medium text-pink-600 bg-pink-100 rounded-full">
                    {currentPhrase.category}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
                  onClick={() => {
                    console.log('Playing pronunciation');
                  }}
                >
                  <FaVolumeUp size={24} />
                </motion.button>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                {currentPhrase.phrase}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 mb-2"
              >
                Pronunciation: {currentPhrase.pronunciation}
              </motion.p>

              {isRevealed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl text-gray-800 mb-6">
                    {currentPhrase.translation}
                  </p>
                  <motion.button
                    onClick={handleNext}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl
                             font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaCheck /> I've Got It!
                  </motion.button>
                </motion.div>
              ) : (
                <motion.button
                  onClick={() => setIsRevealed(true)}
                  className="w-full py-4 bg-gray-100 text-gray-800 rounded-xl font-semibold
                           hover:bg-gray-200 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reveal Translation
                </motion.button>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Category Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm inline-flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              Category: {currentPhrase.category}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LearnPhrase; 