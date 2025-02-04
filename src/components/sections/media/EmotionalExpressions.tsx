'use client';

import React from 'react';
import Image from 'next/image';

const emotions = [
  {
    title: 'Nostalgia in Japan',
    image: '/images/media/nostalgia-japan.jpg',
    description: 'The concept of "natsukashii" - a yearning for the past that brings both joy and gentle sadness.',
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    title: 'Joy in Brazil',
    image: '/images/media/joy-brazil.jpg',
    description: 'The vibrant celebration of "alegria" through carnival, dance, and communal festivities.',
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    title: 'Serenity in Tibet',
    image: '/images/media/serenity-tibet.jpg',
    description: 'The practice of finding inner peace through meditation and mindful living.',
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    title: 'Love in Italy',
    image: '/images/media/love-italy.jpg',
    description: 'The passionate expression of "amore" through art, poetry, and romantic gestures.',
    color: 'from-red-500/20 to-pink-500/20'
  },
  {
    title: 'Harmony in Korea',
    image: '/images/media/harmony-korea.jpg',
    description: 'The art of finding balance in modern cultural expression.',
    color: 'from-purple-500/20 to-violet-500/20',
    shape: 'oval',
    customSize: true
  }
];

export default function EmotionalExpressions() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Emotional Expression Across Cultures
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Explore how different cultures uniquely express and interpret universal human emotions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {emotions.map((emotion, index) => (
            <div
              key={emotion.title}
              className={`group relative overflow-hidden 
                ${emotion.shape === 'oval' ? 'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]' : 'rounded-2xl'}
                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                transform transition-all duration-300 hover:scale-[1.02]
                hover:shadow-xl`}
              style={emotion.customSize ? { maxHeight: '350px', maxWidth: '280px' } : {}}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${emotion.color} opacity-0 
                group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Image */}
              <div className={`${emotion.shape === 'oval' ? 'aspect-[3/4]' : 'aspect-[4/5]'} relative`}>
                <Image
                  src={emotion.image}
                  alt={emotion.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-serif font-bold text-white mb-2 transform translate-y-4 
                  group-hover:translate-y-0 transition-transform duration-300">
                  {emotion.title}
                </h3>
                <p className="text-white/90 transform translate-y-8 opacity-0 
                  group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {emotion.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full 
                  text-white border border-white/20 opacity-0 transform translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 
                  hover:bg-white/20">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 