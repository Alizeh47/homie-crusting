'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Double the categories to create seamless loop
const categories = [
  {
    title: 'ROMANTIC',
    description: 'Discover intimate settings and magical moments for couples',
    image: '/images/categories/romantic.jpg',
  },
  {
    title: 'ADVENTURE',
    description: 'Embark on thrilling journeys that push your boundaries',
    image: '/images/categories/adventure.jpg',
  },
  {
    title: 'CULTURAL IMMERSION',
    description: 'Experience authentic traditions and local ways of life',
    image: '/images/categories/cultural.jpg',
  },
  {
    title: 'SPIRITUAL RETREATS',
    description: 'Find inner peace in sacred spaces around the world',
    image: '/images/categories/spiritual.jpg',
  },
  {
    title: 'WELLNESS ESCAPE',
    description: 'Rejuvenate your mind and body in serene destinations',
    image: '/images/categories/wellness.jpg',
  },
];

// Double the array for seamless loop
const doubledCategories = [...categories, ...categories];

export default function DestinationCategories() {
  return (
    <section className="bg-gray-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Choose Your Journey
        </motion.h2>

        <div className="relative w-full">
          <div className="animate-scroll flex gap-6 whitespace-nowrap">
            {doubledCategories.map((category, index) => (
              <div
                key={`${category.title}-${index}`}
                className="group relative h-96 w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/75 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h3 className="mb-2 font-sans text-2xl font-bold tracking-wider">
                    {category.title}
                  </h3>
                  <p className="text-sm font-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {category.description}
                  </p>
                  <button className="mt-4 rounded-full border-2 border-white bg-transparent px-6 py-2 text-sm font-semibold opacity-0 transition-all duration-300 hover:bg-white hover:text-gray-900 group-hover:opacity-100">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 