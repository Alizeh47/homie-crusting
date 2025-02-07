'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiSmile, FiSun, FiCloud, FiMoon, FiWind } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface FloatingIconProps {
  icon: IconType,
  className?: string,
  delay?: number,
}

const FloatingIcon = ({ icon: Icon, className = "", delay = 0 }: FloatingIconProps) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute ${className}`}
  >
    <Icon className="text-[#1a237e]/20 w-8 h-8" />
  </motion.div>
);

interface EmotionCard {
  id: string,
  emotion: string,
  culture: string,
  description: string,
  longDescription: string,
  expression: string,
  image: string,
  icon: IconType,
  category: string,
}

const emotions: EmotionCard[] = [
  {
    id: '1',
    emotion: 'Hygge',
    culture: 'Danish',
    description: 'A cozy feeling of contentment and well-being through enjoying the simple things in life.',
    longDescription: 'Hygge embodies the Danish art of creating warm, cozy moments that bring joy to everyday life. It\'s about finding comfort in simplicity and sharing meaningful experiences with loved ones.',
    expression: 'Creating intimate gatherings with candles, warm drinks, and comfortable settings.',
    image: '/images/emotions/nordic-winter.jpg',
    icon: FiHeart,
    category: 'Contentment'
  },
  {
    id: '2',
    emotion: 'Wabi-Sabi',
    culture: 'Japanese',
    description: 'Finding beauty in imperfection and accepting life\'s impermanence.',
    longDescription: 'Wabi-sabi represents the Japanese worldview centered on the acceptance of transience and imperfection. It finds beauty in simplicity, naturalness, and the effects of time.',
    expression: 'Appreciating weathered objects, handmade ceramics, and natural asymmetry.',
    image: '/images/emotions/cherry-blossoms.jpg',
    icon: FiMoon,
    category: 'Appreciation'
  },
  {
    id: '3',
    emotion: 'Ubuntu',
    culture: 'African',
    description: 'The belief in a universal bond of sharing that connects all humanity.',
    longDescription: 'Ubuntu is a profound African concept meaning "I am because we are." It emphasizes the interconnectedness of human beings and the importance of community.',
    expression: 'Practicing compassion, community support, and shared celebration.',
    image: '/images/emotions/celebration.jpg',
    icon: FiSun,
    category: 'Connection'
  },
  {
    id: '4',
    emotion: 'La Dolce Vita',
    culture: 'Italian',
    description: 'The sweet life - celebrating life\'s pleasures and living in the moment.',
    longDescription: 'La Dolce Vita represents the Italian philosophy of savoring life\'s sweetness through good food, wine, company, and taking time to enjoy life\'s simple pleasures.',
    expression: 'Long family meals, afternoon walks, and celebrating life\'s daily moments.',
    image: '/images/emotions/italian-family.jpg',
    icon: FiStar,
    category: 'Joy'
  },
  {
    id: '5',
    emotion: 'Zen',
    culture: 'Japanese',
    description: 'A state of calm attentiveness and presence of mind.',
    longDescription: 'Zen emphasizes the value of meditation and mindfulness, seeking to understand the meaning of life directly through personal experience.',
    expression: 'Meditation, mindful activities, and creating peaceful environments.',
    image: '/images/emotions/meditation.jpg',
    icon: FiCloud,
    category: 'Peace'
  },
  {
    id: '6',
    emotion: 'Tarab',
    culture: 'Arabic',
    description: 'A state of ecstasy and emotional transformation through music.',
    longDescription: 'Tarab describes the emotional transformation and connection between musicians and listeners in Arabic music, creating a state of enchantment and ecstasy.',
    expression: 'Musical gatherings, dance celebrations, and emotional expression through art.',
    image: '/images/emotions/dancing.jpg',
    icon: FiWind,
    category: 'Joy'
  }
];

const categories = [
  { name: 'All', icon: FiSmile },
  { name: 'Contentment', icon: FiHeart },
  { name: 'Appreciation', icon: FiMoon },
  { name: 'Connection', icon: FiSun },
  { name: 'Joy', icon: FiStar },
  { name: 'Peace', icon: FiCloud }
];

export default function EmotionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEmotion, setSelectedEmotion] = useState<EmotionCard | null>(null);

  const filteredEmotions = selectedCategory === 'All' 
    ? emotions 
    : emotions.filter(emotion => emotion.category === selectedCategory);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E3F2FD] via-white to-white">
      {/* Decorative Elements */}
      <FloatingIcon icon={FiStar} className="top-20 left-[10%]" />
      <FloatingIcon icon={FiHeart} className="top-40 right-[15%]" delay={1} />
      <FloatingIcon icon={FiStar} className="bottom-40 left-[20%]" delay={2} />
      <FloatingIcon icon={FiHeart} className="top-60 right-[25%]" delay={1.5} />

      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10">
        <Image
          src="/images/emotions/pattern.png"
          alt="Decorative emotion pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">
            Cultural Emotions
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            Explore unique emotional concepts from different cultures around the world. 
            Each emotion tells a story about how different societies experience and express feelings.
          </p>
        </motion.div>

        {/* Add Summary Section before the Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-sm rounded-[30px] p-8 border border-[#E3F2FD]">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-4">Explore Our Cultural Journey</h2>
              <div className="space-y-4 text-[#1a237e]/70">
                <p><span className="font-semibold">Emotions:</span> Discover unique emotional concepts from diverse cultures worldwide.</p>
                <p><span className="font-semibold">Language:</span> Learn authentic expressions and their cultural significance.</p>
                <p><span className="font-semibold">Media:</span> Experience cultural stories through various art forms and media.</p>
                <p><span className="font-semibold">Reviews:</span> Read community insights and experiences with different cultures.</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-4">Why Cultural Emotions Matter</h2>
              <div className="space-y-4 text-[#1a237e]/70">
                <p>Understanding cultural emotions helps us:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Build deeper cross-cultural connections</li>
                  <li>Appreciate diverse perspectives on life</li>
                  <li>Enrich our emotional vocabulary</li>
                  <li>Foster global empathy and understanding</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                        ${selectedCategory === category.name 
                          ? 'bg-[#1a237e] text-white' 
                          : 'bg-[#E3F2FD]/50 text-[#1a237e]/70 hover:bg-[#E3F2FD]'
                        }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Emotions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEmotions.map((emotion, index) => (
            <motion.div
              key={emotion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedEmotion(emotion)}
              className="bg-white/80 backdrop-blur-sm rounded-[30px] overflow-hidden border border-[#E3F2FD] group 
                       hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={emotion.image}
                  alt={emotion.emotion}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <emotion.icon className="w-4 h-4" />
                    <span className="text-sm">{emotion.culture}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{emotion.emotion}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#1a237e]/70">{emotion.description}</p>
                <button className="mt-4 text-[#1a237e] font-medium hover:text-[#0d47a1] transition-colors">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emotion Detail Modal */}
      <AnimatePresence>
        {selectedEmotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEmotion(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[40px] max-w-2xl w-full overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src={selectedEmotion.image}
                  alt={selectedEmotion.emotion}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelectedEmotion(null)}
                  className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <selectedEmotion.icon className="w-6 h-6 text-[#1a237e]" />
                  <h2 className="text-3xl font-serif font-bold text-[#1a237e]">{selectedEmotion.emotion}</h2>
                </div>
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full text-sm bg-[#E3F2FD] text-[#1a237e]">
                    {selectedEmotion.culture} Culture
                  </span>
                </div>
                <p className="text-[#1a237e]/70 mb-6 leading-relaxed">
                  {selectedEmotion.longDescription}
                </p>
                <div className="bg-[#E3F2FD]/30 rounded-2xl p-6">
                  <h3 className="font-semibold text-[#1a237e] mb-2">Cultural Expression</h3>
                  <p className="text-[#1a237e]/70">{selectedEmotion.expression}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
} 