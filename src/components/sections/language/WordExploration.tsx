'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaVolumeUp, FaInfoCircle } from 'react-icons/fa';

interface Word {
  id: number;
  word: string;
  word_romanized?: string;
  language: string;
  pronunciation: string;
  meaning: string;
  usage: string;
  audioUrl: string;
}

interface WordCardProps {
  word: Word;
  index: number;
}

// Enhanced sample data with three new words
const words: Word[] = [
  {
    id: 1,
    word: 'Hygge',
    language: 'Danish',
    pronunciation: 'hoo-gah',
    meaning: 'A cozy and comfortable conviviality with feelings of wellness and contentment',
    usage: 'After a long week, we enjoyed some hygge time with candles and hot cocoa.',
    audioUrl: '/audio/hygge.mp3'
  },
  {
    id: 2,
    word: 'Saudade',
    language: 'Portuguese',
    pronunciation: 'sau-da-de',
    meaning: 'A deep emotional state of nostalgic longing for something or someone that you love',
    usage: 'Whenever I hear that song, I feel saudade for my childhood home.',
    audioUrl: '/audio/saudade.mp3'
  },
  {
    id: 3,
    word: '木漏れ日',
    word_romanized: 'Komorebi',
    language: 'Japanese',
    pronunciation: 'ko-mo-re-bi',
    meaning: 'Sunlight filtering through trees',
    usage: 'The komorebi created beautiful patterns on the forest floor.',
    audioUrl: '/audio/komorebi.mp3'
  },
  {
    id: 4,
    word: 'Meraki',
    language: 'Greek',
    pronunciation: 'may-rah-kee',
    meaning: 'To do something with soul, creativity, or love; to put something of yourself into your work',
    usage: 'She designs each piece of jewelry with meraki, making each one unique and special.',
    audioUrl: '/audio/meraki.mp3'
  },
  {
    id: 5,
    word: '눈치',
    word_romanized: 'Nunchi',
    language: 'Korean',
    pronunciation: 'noon-chee',
    meaning: 'The art of sensing what others are thinking and feeling, and responding appropriately',
    usage: 'Her excellent nunchi helped her navigate the complex social situation with ease.',
    audioUrl: '/audio/nunchi.mp3'
  },
  {
    id: 6,
    word: 'Gezellig',
    language: 'Dutch',
    pronunciation: 'heh-SELL-ick',
    meaning: 'A feeling of coziness, warmth and togetherness; similar to hygge but more social',
    usage: 'The small café was very gezellig, filled with friends chatting and laughing.',
    audioUrl: '/audio/gezellig.mp3'
  }
];

const WordCard = ({ word, index }: WordCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="relative w-full max-w-sm mx-auto"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative w-full h-[300px] rounded-xl shadow-lg transition-all duration-500 transform 
                   ${isFlipped ? 'rotate-y-180' : ''} hover:shadow-2xl`}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
          backgroundColor: isHovered ? '#ffffff' : '#fafafa'
        }}
      >
        {/* Front of card */}
        <div
          className={`absolute inset-0 p-6 rounded-xl ${
            isFlipped ? 'opacity-0' : 'opacity-100'
          } transition-opacity duration-300`}
          onClick={() => setIsFlipped(true)}
        >
          <motion.div 
            className="flex justify-between items-start"
            variants={contentVariants}
          >
            <h3 className="text-2xl font-bold text-gray-800 group">
              {word.word_romanized ? (
                <>
                  <span className="block text-3xl mb-1 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {word.word}
                  </span>
                  <span className="text-lg text-gray-600">({word.word_romanized})</span>
                </>
              ) : (
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {word.word}
                </span>
              )}
            </h3>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                console.log('Playing pronunciation');
              }}
            >
              <FaVolumeUp size={20} />
            </motion.button>
          </motion.div>
          <motion.div variants={contentVariants}>
            <p className="text-gray-600 mt-2 flex items-center gap-2">
              <FaInfoCircle className="text-purple-500" />
              {word.language}
            </p>
            <p className="text-gray-800 mt-4">{word.meaning}</p>
          </motion.div>
          <motion.div 
            className="absolute bottom-6 left-6 right-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-sm text-purple-600 flex items-center justify-center gap-2">
              Click to see usage example
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </p>
          </motion.div>
        </div>

        {/* Back of card */}
        <div
          className={`absolute inset-0 p-6 bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-xl
                     ${isFlipped ? 'opacity-100 rotate-y-180' : 'opacity-0'}`}
          onClick={() => setIsFlipped(false)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Usage Example</h4>
            <p className="text-lg">{word.usage}</p>
            <p className="text-sm mt-4 flex items-center gap-2">
              <FaVolumeUp />
              Pronunciation: {word.pronunciation}
            </p>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-white/80 flex items-center justify-center gap-2">
                <motion.span
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ←
                </motion.span>
                Click to flip back
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WordExploration = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Words with No Direct English Translation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover unique words that capture complex emotions and experiences from cultures around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatePresence>
            {words.map((word, index) => (
              <WordCard key={word.id} word={word} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WordExploration; 