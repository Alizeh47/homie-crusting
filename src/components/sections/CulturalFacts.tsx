'use client';

import { useState, useEffect } from 'react';
import { Globe2, Book, Search, PartyPopper, Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Image } from '@/components/ui/Image';

interface CulturalFact {
  id: string;
  country: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  position: { x: number; y: number };
  snippet: string;
}

const culturalFacts: CulturalFact[] = [
  {
    id: '1',
    country: 'Japan',
    title: 'Crying in Public as Emotional Healing',
    description: 'In Japan, crying intentionally in public is seen as a form of emotional cleansing, celebrated in organized "tear-seeking" sessions.',
    icon: '🌸',
    image: '/images/cultural-facts/japan-crying.jpg',
    position: { x: 60, y: 30 },
    snippet: 'Did you know? Japanese "crying clubs" offer a safe space for emotional release.',
  },
  {
    id: '2',
    country: 'South Korea',
    title: 'Age Counting Tradition',
    description: 'South Koreans have a unique age-counting system where everyone is considered one year old at birth and gains a year every New Year.',
    icon: '🎂',
    image: '/images/cultural-facts/korea-age.jpg',
    position: { x: 55, y: 30 },
    snippet: 'Fun fact: In Korea, you might be 2 years older than your international age!',
  },
  {
    id: '3',
    country: 'India',
    title: 'Head Wobble Gesture',
    description: 'The famous Indian head wobble can mean yes, no, or maybe - a complex non-verbal communication that varies by context and region.',
    icon: '✨',
    image: '/images/cultural-facts/india-gesture.jpg',
    position: { x: 35, y: 15 },
    snippet: 'The Indian head wobble has at least 8 different meanings!',
  },
];

const whatWeOffer = [
  {
    icon: Book,
    title: 'Authentic Connections',
    description: 'We believe emotions are best understood through real stories, shared directly by people from different cultures.',
  },
  {
    icon: Search,
    title: 'Unmatched Perspectives',
    description: 'Our platform highlights unique traditions, rituals, and expressions of emotions.',
  },
  {
    icon: PartyPopper,
    title: 'Celebrating the Unique',
    description: 'Discover festivals, traditions, and recipes that celebrate diversity.',
  },
  {
    icon: Heart,
    title: 'Guided by Stories',
    description: 'Every shared story comes from real experiences that connect humanity.',
  },
];

const OptimizedImage = ({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) => {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-all duration-300"
        priority={priority}
      />
    </div>
  );
};

export function CulturalFacts() {
  const [mounted, setMounted] = useState(false);
  const [hoveredFact, setHoveredFact] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [showSnippet, setShowSnippet] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for Framer Motion
  const mapIconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, rotate: [0, -5, 5, 0] },
  };

  const cardVariants = {
    initial: { y: 0, opacity: 1 },
    hover: { y: -8, opacity: 1 },
  };

  const snippetVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  if (!mounted) {
    return (
      <div className="py-20 bg-[#cdb891]">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-xl mb-8" />
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-[#cdb891]">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
      >
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Cultural Exchange of Emotions and Feelings: A Universal Connection
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore the world through the lens of emotions, traditions, and human connections.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href={{ pathname: '/culture' }}
            className="px-8 py-3 bg-[#05342b] text-white rounded-lg font-medium hover:bg-[#05342b]/90 transition-all duration-300 text-center"
          >
            Start Exploring
          </Link>
          <Link
            href={{ pathname: '/culture/journey' }}
            className="px-8 py-3 bg-white text-[#05342b] border-2 border-[#05342b] rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 text-center"
          >
            Start Your Journey
          </Link>
        </div>
      </motion.div>

      {/* Interactive World Map */}
      <div className="relative max-w-6xl mx-auto mb-20 aspect-[2/1] bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/backgrounds/world-map.png"
            alt="World Map Background"
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        {culturalFacts.map((fact) => (
          <motion.button
            key={fact.id}
            variants={mapIconVariants}
            initial="initial"
            whileHover="hover"
            className={cn(
              'absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2',
              'rounded-full flex items-center justify-center',
              'transition-colors duration-300 z-10',
              hoveredRegion === fact.country ? 'bg-primary text-white' : 'bg-white text-primary shadow-lg'
            )}
            style={{ left: `${fact.position.x}%`, top: `${fact.position.y}%` }}
            onMouseEnter={() => {
              setHoveredRegion(fact.country);
              setShowSnippet(true);
            }}
            onMouseLeave={() => {
              setHoveredRegion(null);
              setShowSnippet(false);
            }}
            data-cursor="emotion"
          >
            <span className="text-2xl">{fact.icon}</span>
            <AnimatePresence>
              {hoveredRegion === fact.country && showSnippet && (
                <motion.div
                  variants={snippetVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute top-full mt-2 px-4 py-2 bg-white rounded-lg shadow-lg text-sm text-gray-900 whitespace-nowrap z-20"
                >
                  {fact.snippet}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      {/* Cultural Facts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {culturalFacts.map((fact) => (
            <motion.div
              key={fact.id}
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className={cn(
                'bg-white rounded-xl overflow-hidden shadow-lg group',
                hoveredFact === fact.id && 'ring-2 ring-primary'
              )}
              onMouseEnter={() => setHoveredFact(fact.id)}
              onMouseLeave={() => setHoveredFact(null)}
              data-cursor={fact.country.toLowerCase()}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <OptimizedImage
                    src={fact.image}
                    alt={fact.title}
                    priority={fact.id === '1'}
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {fact.country} – {fact.title}
                </h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* What We Offer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {whatWeOffer.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md group"
                data-cursor="pointer"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="h-8 w-8 text-primary mb-4" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Call-to-Action Footer */}
      <div className="mt-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 lg:h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/cultural-facts/journey.jpg"
                alt="Cultural Journey"
                fill
                className="object-cover"
                priority
                quality={75}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent mix-blend-overlay" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <h2 className="text-3xl font-serif font-bold mb-4">
                Join the Journey of Emotional Exploration
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Share your stories, explore the world's emotions, and connect with humanity.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/culture/journey"
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  data-cursor="pointer"
                >
                  <span>Start Your Journey</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CulturalFacts; 