'use client';

import { useState, useEffect } from 'react';
import { Globe2, Book, Search, PartyPopper, Heart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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

const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkltYWdlIGNvbWluZyBzb29uPC90ZXh0Pjwvc3ZnPg==';

const culturalFacts: CulturalFact[] = [
  {
    id: '1',
    country: 'Japan',
    title: 'Crying in Public as Emotional Healing',
    description: 'In Japan, crying intentionally in public is seen as a form of emotional cleansing, celebrated in organized "tear-seeking" sessions.',
    icon: '🌸',
    image: PLACEHOLDER_IMAGE,
    position: { x: 80, y: 30 },
    snippet: 'Did you know? Japanese "crying clubs" offer a safe space for emotional release.',
  },
  {
    id: '2',
    country: 'South Korea',
    title: 'Age Counting Tradition',
    description: 'South Koreans have a unique age-counting system where everyone is considered one year old at birth and gains a year every New Year.',
    icon: '📅',
    image: PLACEHOLDER_IMAGE,
    position: { x: 75, y: 35 },
    snippet: 'Fun fact: In Korea, you might be 2 years older than your international age!',
  },
  {
    id: '3',
    country: 'India',
    title: 'Head Wobble Gesture',
    description: 'The famous Indian head wobble can mean yes, no, or maybe - a complex non-verbal communication that varies by context and region.',
    icon: '🇮🇳',
    image: PLACEHOLDER_IMAGE,
    position: { x: 65, y: 45 },
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

// Separate client component for image handling
const ClientImage = ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(PLACEHOLDER_IMAGE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
    setIsLoading(true);
  }, [src]);

  return (
    <div className="relative w-full h-full bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse w-full h-full bg-gray-200" />
        </div>
      )}
      <Image
        {...props}
        src={error ? PLACEHOLDER_IMAGE : imgSrc}
        alt={alt}
        onError={() => {
          setError(true);
          setImgSrc(PLACEHOLDER_IMAGE);
        }}
        onLoadingComplete={() => setIsLoading(false)}
        priority={props.priority}
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-world-map bg-cover bg-center"
        />
        {culturalFacts.map((fact) => (
          <motion.button
            key={fact.id}
            variants={mapIconVariants}
            initial="initial"
            whileHover="hover"
            className={cn(
              'absolute w-12 h-12 transform -translate-x-1/2 -translate-y-1/2',
              'rounded-full flex items-center justify-center',
              'transition-colors duration-300',
              hoveredRegion === fact.country ? 'bg-primary text-white' : 'bg-white text-primary'
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
            {hoveredRegion === fact.country && (
              <motion.div
                variants={snippetVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute top-full mt-2 px-4 py-2 bg-white rounded-lg shadow-lg text-sm text-gray-900 whitespace-nowrap"
              >
                {fact.snippet}
              </motion.div>
            )}
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
                  <ClientImage
                    src={fact.image}
                    alt={fact.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
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
              className="relative h-64 lg:h-full bg-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-4">
                Join the Journey of Emotional Exploration
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Share your stories, explore the world's emotions, and connect with humanity.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
                data-cursor="pointer"
              >
                Start Your Journey
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CulturalFacts; 