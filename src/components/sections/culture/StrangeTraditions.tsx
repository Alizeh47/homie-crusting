'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const traditions = [
  {
    id: '1',
    title: 'Tomatina Festival, Spain',
    image: '/images/culture/tomatina.jpg',
    description: 'A unique festival where thousands gather for the world\'s biggest food fight, throwing ripe tomatoes at each other in pure joy.'
  },
  {
    id: '2',
    title: 'Lantern Festival, Thailand',
    image: '/images/culture/lantern.jpg',
    description: 'Thousands of paper lanterns are released into the night sky, creating a mesmerizing spectacle of light and hope.'
  },
  {
    id: '3',
    title: 'Holi, India',
    image: '/images/culture/holi.jpg',
    description: 'The festival of colors where people come together to celebrate the victory of good over evil by throwing vibrant colored powders.'
  },
  {
    id: '4',
    title: 'Day of the Dead, Mexico',
    image: '/images/culture/day-of-dead.jpg',
    description: 'A celebration of life and death where families honor their ancestors with colorful altars, sugar skulls, and marigold flowers.'
  },
  {
    id: '5',
    title: 'Cooper\'s Hill Cheese Rolling, England',
    image: '/images/culture/cheese-rolling.jpg',
    description: 'Participants chase a wheel of cheese down a steep hill in this centuries-old tradition, risking life and limb for glory.'
  },
  {
    id: '6',
    title: 'Songkran Water Festival, Thailand',
    image: '/images/culture/songkran.jpg',
    description: 'A nationwide water fight marking Thai New Year, symbolizing the washing away of misfortune and welcoming good luck.'
  },
  {
    id: '7',
    title: 'Running of the Bulls, Spain',
    image: '/images/culture/bull-running.jpg',
    description: 'Part of the San Fermín festival where participants run alongside bulls through the streets of Pamplona.'
  }
];

// Double the array for seamless loop
const doubledTraditions = [...traditions, ...traditions];

export default function StrangeTraditions() {
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
          Strange Yet Beautiful Traditions Around the World
        </motion.h2>

        <div className="relative w-full">
          <div className="animate-scroll flex gap-6 whitespace-nowrap">
            {doubledTraditions.map((tradition, index) => (
              <div
                key={`${tradition.id}-${index}`}
                className="group relative h-96 w-[300px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={tradition.image}
                  alt={tradition.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="mb-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
                    <h3 className="font-sans text-xl font-bold tracking-wider leading-tight whitespace-normal max-w-[250px]">
                      {tradition.title}
                    </h3>
                  </div>
                  <p className="text-sm font-light opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-normal">
                    {tradition.description}
                  </p>
                  <button className="mt-4 rounded-full border-2 border-white bg-transparent px-6 py-2 text-sm font-semibold opacity-0 transition-all duration-300 hover:bg-white hover:text-gray-900 group-hover:opacity-100">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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