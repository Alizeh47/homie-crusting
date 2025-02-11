'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const emotions = [
  {
    title: 'Happiness in Japan',
    description: 'In Japan, happiness is often expressed through the act of gift-giving and respectful bowing, emphasizing the joy of giving rather than receiving.',
    image: '/images/culture/japan-happiness.jpg',
    slug: 'japanese-happiness'
  },
  {
    title: 'Grief in Mexico',
    description: 'Rather than mourning in black, Mexicans celebrate the lives of departed loved ones with vibrant colors, music, and festive gatherings.',
    image: '/images/culture/dia-muertos.jpg',
    slug: 'mexican-grief'
  },
  {
    title: 'Love in France',
    description: 'The French tradition of expressing love through handwritten letters continues to thrive, viewing it as an art form of emotional expression.',
    image: '/images/culture/french-letters.jpg',
    slug: 'french-love'
  },
  {
    title: 'Gratitude in India',
    description: 'In Indian culture, touching the feet of elders is a profound expression of gratitude and respect, symbolizing the passing of wisdom between generations.',
    image: '/images/culture/india-gratitude.jpg',
    slug: 'indian-gratitude'
  },
  {
    title: 'Joy in African Cultures',
    description: 'The practice of ululation - a high-pitched vocal sound - is used across many African cultures to express extreme joy and celebration at special occasions.',
    image: '/images/culture/african-joy.jpg',
    slug: 'african-joy'
  },
  {
    title: 'Contentment in Nordic Hygge',
    description: 'The Danish concept of Hygge represents finding joy in coziness and contentment, often expressed through intimate gatherings and creating warm, welcoming spaces.',
    image: '/images/culture/nordic-hygge.jpg',
    slug: 'nordic-hygge'
  }
];

export default function EmotionalExpressions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emotions.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + emotions.length) % emotions.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Emotional Expressions Across Cultures
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how different cultures express and interpret emotions, showcasing the beautiful diversity in human emotional experiences around the world.
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="w-full md:w-1/2 relative aspect-[4/3]">
              <Image
                src={emotions[currentIndex].image}
                alt={emotions[currentIndex].title}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {emotions[currentIndex].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {emotions[currentIndex].description}
              </p>
              <Link
                href={`/culture/emotions/${emotions[currentIndex].slug}`}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {emotions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 