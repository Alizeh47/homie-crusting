'use client';

import { useState, useEffect, useRef } from 'react';
import { Heart, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';
import Image, { type ImageProps } from 'next/image';
import { motion } from 'framer-motion';

const PLACEHOLDER_IMAGE = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkltYWdlIGNvbWluZyBzb29uPC90ZXh0Pjwvc3ZnPg==';

interface EmotionCard {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  tags: string[];
}

interface ClientImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

// Client-side image component with error handling
const ClientImage = ({ src, alt, priority, ...props }: Omit<ImageProps, 'src'> & { src: string }) => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-pulse w-full h-full bg-gray-200" />
        </div>
      )}
      <div className="relative w-full h-full">
        <img
          src={error ? PLACEHOLDER_IMAGE : src}
          alt={alt}
          className="object-cover w-full h-full"
          onLoad={() => setIsLoading(false)}
          onError={() => setError(true)}
          style={{ display: 'none' }} // Hide the img element
        />
      </div>
    </div>
  );
};

const emotionCards: EmotionCard[] = [
  {
    id: '1',
    title: 'Nordic Hygge',
    description: 'Experience the Scandinavian concept of cozy contentment and well-being in winter.',
    location: 'Scandinavia',
    image: '/static/images/emotions/nordic-winter.jpg',
    tags: ['Comfort', 'Contentment', 'Winter'],
  },
  {
    id: '2',
    title: 'Italian Conviviality',
    description: 'Discover the warmth and joy of Italian family gatherings and shared meals.',
    location: 'Italy',
    image: '/static/images/emotions/italian-family.jpg',
    tags: ['Family', 'Joy', 'Connection'],
  },
  {
    id: '3',
    title: 'Sakura Moments',
    description: 'Embrace the Japanese appreciation of fleeting beauty during cherry blossom season.',
    location: 'Japan',
    image: '/static/images/emotions/cherry-blossoms.jpg',
    tags: ['Beauty', 'Tranquility', 'Nature'],
  },
  {
    id: '4',
    title: 'Moroccan Hospitality',
    description: 'Experience the deep-rooted tradition of Moroccan tea ceremonies and welcoming spirit.',
    location: 'Morocco',
    image: '/static/images/emotions/moroccan-tea.jpg',
    tags: ['Hospitality', 'Tradition', 'Connection'],
  },
];

export function EmotionsGrid() {
  const [mounted, setMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="py-20 bg-gray-50">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-xl mb-8" />
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Emotions Around the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore unique emotional concepts and expressions from different cultures,
            each telling a story of human connection and understanding.
          </p>
        </motion.div>

        {/* Emotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {emotionCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Number(card.id) * 0.1 }}
              className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Image */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <ClientImage
                  src={card.image}
                  alt={card.title}
                  priority={card.id === '1'}
                />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{card.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className={`text-sm transition-opacity duration-300 ${
                  hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-white/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/emotions"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 transition-colors"
          >
            <Globe className="mr-2 h-5 w-5" />
            Explore More Emotions
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 