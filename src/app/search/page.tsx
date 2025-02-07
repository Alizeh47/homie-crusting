'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiSearch, FiFilter, FiStar, FiHeart, FiBook, FiGlobe, FiMusic, FiCamera } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface FloatingIconProps {
  icon: IconType;
  className?: string;
  delay?: number;
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

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: IconType;
}

const categories = [
  { name: 'All', icon: FiGlobe },
  { name: 'Culture', icon: FiBook },
  { name: 'Music', icon: FiMusic },
  { name: 'Visual Arts', icon: FiCamera },
  { name: 'Traditions', icon: FiHeart }
];

const sampleResults: SearchResult[] = [
  {
    id: '1',
    title: 'Traditional Japanese Tea Ceremony',
    category: 'Culture',
    description: 'Discover the ancient art and cultural significance of the Japanese tea ceremony.',
    image: '/images/search/tea-ceremony.jpg',
    icon: FiBook
  },
  {
    id: '2',
    title: 'Classical Indian Dance Forms',
    category: 'Music',
    description: 'Explore the rhythmic beauty and storytelling in traditional Indian dance.',
    image: '/images/search/indian-dance.jpg',
    icon: FiMusic
  },
  {
    id: '3',
    title: 'African Tribal Art',
    category: 'Visual Arts',
    description: 'Journey through the symbolic meanings and cultural importance of African tribal art.',
    image: '/images/search/tribal-art.jpg',
    icon: FiCamera
  }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [results, setResults] = useState<SearchResult[]>(sampleResults);

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
          src="/images/search/search-pattern.png"
          alt="Decorative search pattern"
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
            Explore Cultures
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            Discover rich cultural traditions, art forms, and stories from around the world. 
            What would you like to explore today?
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-[40px] p-8 shadow-xl border border-[#E3F2FD]">
            {/* Search Input */}
            <div className="relative mb-8">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for cultural experiences..."
                className="w-full px-6 py-4 pl-14 rounded-full border border-[#E3F2FD] bg-white/50 
                         focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e]
                         text-[#1a237e] placeholder-[#1a237e]/50"
              />
              <FiSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#1a237e]/50 w-5 h-5" />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
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
            </div>
          </div>
        </motion.div>

        {/* Search Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-[30px] overflow-hidden border border-[#E3F2FD] group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={result.image}
                  alt={result.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <result.icon className="w-4 h-4" />
                    <span className="text-sm">{result.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{result.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#1a237e]/70">{result.description}</p>
                <button className="mt-4 text-[#1a237e] font-medium hover:text-[#0d47a1] transition-colors">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 