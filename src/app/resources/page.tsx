'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiBook, FiVideo, FiHeadphones, FiFileText, FiDownload, FiExternalLink } from 'react-icons/fi';
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

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio' | 'guide';
  icon: IconType;
  image: string;
  link: string;
  downloadable?: boolean;
  category: string;
}

const categories = [
  { name: 'All', icon: FiStar },
  { name: 'Articles', icon: FiFileText },
  { name: 'Videos', icon: FiVideo },
  { name: 'Audio', icon: FiHeadphones },
  { name: 'Guides', icon: FiBook }
];

const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding Cultural Intelligence',
    description: 'A comprehensive guide to developing cultural awareness and sensitivity in today\'s global world.',
    type: 'article',
    icon: FiFileText,
    image: '/images/backgrounds/world-map.png',
    link: '/resources/cultural-intelligence',
    category: 'Articles'
  },
  {
    id: '2',
    title: 'Traditional Ceremonies Around the World',
    description: 'Explore the rich tapestry of cultural ceremonies and their significance across different societies.',
    type: 'video',
    icon: FiVideo,
    image: '/images/culture/african-joy.jpg',
    link: '/resources/ceremonies',
    category: 'Videos'
  },
  {
    id: '3',
    title: 'Cultural Music and Its Impact',
    description: 'Listen to diverse musical traditions and understand their role in shaping cultural identity.',
    type: 'audio',
    icon: FiHeadphones,
    image: '/images/culture/french-letters.jpg',
    link: '/resources/cultural-music',
    category: 'Audio'
  },
  {
    id: '4',
    title: 'Cross-Cultural Communication Guide',
    description: 'Essential tips and strategies for effective communication across cultural boundaries.',
    type: 'guide',
    icon: FiBook,
    image: '/images/culture/lantern.jpg',
    link: '/resources/communication-guide',
    downloadable: true,
    category: 'Guides'
  },
  {
    id: '5',
    title: 'Global Food Traditions',
    description: 'Discover how food shapes cultural identity and brings communities together across the globe.',
    type: 'article',
    icon: FiFileText,
    image: '/images/emotions/nordic-winter.jpg',
    link: '/resources/food-traditions',
    category: 'Articles'
  },
  {
    id: '6',
    title: 'Sacred Places and Rituals',
    description: 'Journey through the world\'s most significant cultural and spiritual locations.',
    type: 'video',
    icon: FiVideo,
    image: '/images/emotions/celebration.jpg',
    link: '/resources/sacred-places',
    category: 'Videos'
  },
  {
    id: '7',
    title: 'Cultural Stories Podcast',
    description: 'Weekly episodes featuring fascinating stories from different cultures around the world.',
    type: 'audio',
    icon: FiHeadphones,
    image: '/images/emotions/dancing.jpg',
    link: '/resources/cultural-stories',
    category: 'Audio'
  },
  {
    id: '8',
    title: 'Cultural Etiquette Handbook',
    description: 'Your comprehensive guide to navigating social customs and traditions worldwide.',
    type: 'guide',
    icon: FiBook,
    image: '/images/culture/holi.jpg',
    link: '/resources/etiquette-guide',
    downloadable: true,
    category: 'Guides'
  }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          src="/images/resources/pattern.png"
          alt="Decorative pattern"
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
            Cultural Resources
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            Discover our collection of carefully curated resources to deepen your understanding 
            of different cultures and traditions around the world.
          </p>
        </motion.div>

        {/* Add Summary Section before Search and Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-sm rounded-[30px] p-8 border border-[#E3F2FD] mb-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-4">Explore Our Platform</h2>
              <div className="space-y-4 text-[#1a237e]/70">
                <p><span className="font-semibold">Home:</span> Your gateway to cultural exploration and discovery.</p>
                <p><span className="font-semibold">Emotions:</span> Understand unique emotional concepts across cultures.</p>
                <p><span className="font-semibold">Language:</span> Learn expressions that bridge cultural gaps.</p>
                <p><span className="font-semibold">Media:</span> Experience culture through art, music, and stories.</p>
                <p><span className="font-semibold">Resources:</span> Access curated materials for deeper understanding.</p>
                <p><span className="font-semibold">Reviews:</span> Read authentic experiences and cultural insights.</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-4">Resource Categories</h2>
              <div className="space-y-4 text-[#1a237e]/70">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Articles</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>In-depth cultural analysis</li>
                      <li>Expert perspectives</li>
                      <li>Research findings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Videos</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Documentary content</li>
                      <li>Cultural ceremonies</li>
                      <li>Traditional practices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Audio</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Cultural podcasts</li>
                      <li>Traditional music</li>
                      <li>Oral histories</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Guides</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Practical handbooks</li>
                      <li>Cultural etiquette</li>
                      <li>Learning materials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search and Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          {/* Search Input */}
          <div className="relative mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full px-6 py-4 rounded-full border border-[#E3F2FD] bg-white/50 
                       focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e]
                       text-[#1a237e] placeholder-[#1a237e]/50"
            />
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
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-[30px] overflow-hidden border border-[#E3F2FD] 
                       group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    <resource.icon className="w-4 h-4" />
                    <span className="text-sm">{resource.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#1a237e]/70 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <a
                    href={resource.link}
                    className="text-[#1a237e] font-medium hover:text-[#0d47a1] transition-colors flex items-center gap-2"
                  >
                    {resource.downloadable ? (
                      <>
                        <FiDownload className="w-4 h-4" />
                        Download
                      </>
                    ) : (
                      <>
                        <FiExternalLink className="w-4 h-4" />
                        Learn more
                      </>
                    )}
                  </a>
                  <span className="text-sm text-[#1a237e]/50">{resource.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-[#1a237e]/70 text-lg">
              No resources found matching your criteria. Try adjusting your search or category filter.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
} 