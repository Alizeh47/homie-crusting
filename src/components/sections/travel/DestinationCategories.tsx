'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = [
  {
    title: 'ROMANTIC',
    description: 'Discover intimate settings and magical moments for couples',
    image: '/images/emotions/moroccan-tea.jpg',
    link: '/explore/romantic',
    color: 'from-pink-500/20 to-rose-500/20'
  },
  {
    title: 'ADVENTURE',
    description: 'Embark on thrilling journeys that push your boundaries',
    image: '/images/culture/hero.jpg',
    link: '/explore/adventure',
    color: 'from-emerald-500/20 to-green-500/20'
  },
  {
    title: 'SPIRITUAL',
    description: 'Find inner peace in sacred spaces around the world',
    image: '/images/culture/japanese-bow.jpg',
    link: '/explore/spiritual',
    color: 'from-purple-500/20 to-indigo-500/20'
  },
  {
    title: 'WELLNESS',
    description: 'Rejuvenate your mind and body in serene destinations',
    image: '/images/culture/nordic-hygge.jpg',
    link: '/explore/wellness',
    color: 'from-blue-500/20 to-cyan-500/20'
  }
];

// Double the array for seamless loop
const doubledCategories = [...categories, ...categories];

export default function DestinationCategories() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
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
              <Link 
                href={category.link} 
                key={`${category.title}-${index}`}
                className="block"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative h-96 w-[250px] sm:w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.color} transition-opacity duration-300 group-hover:opacity-90`} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="mb-2 font-serif text-2xl font-bold tracking-wider text-white drop-shadow-md">
                      {category.title}
                    </h3>
                    <p className="text-sm font-light text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {category.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm px-6 py-2 text-sm font-semibold text-white opacity-0 transition-all duration-300 hover:bg-white hover:text-gray-900 group-hover:opacity-100"
                    >
                      Explore More
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
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
        
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 