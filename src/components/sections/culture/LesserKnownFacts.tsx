'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const facts = [
  {
    number: '01',
    title: 'Hidden Meanings in Japanese Bowing',
    description: 'The angle and duration of a bow in Japanese culture can convey various meanings, from a casual greeting to deep apology or respect. A 15-degree bow shows basic politeness, while a 45-degree bow expresses sincere gratitude or apology.',
    image: '/images/culture/japanese-bow.jpg'
  },
  {
    number: '02',
    title: 'The Secret Language of Hand Gestures in Italy',
    description: 'Italian hand gestures are a complex non-verbal language with hundreds of distinct meanings, each telling its own story. Some gestures date back to ancient Rome, making them a living connection to historical communication.',
    image: '/images/culture/italian-gestures.jpg'
  },
  {
    number: '03',
    title: 'Finnish Coffee Culture\'s Unique "Sisu"',
    description: 'Finland consumes more coffee per capita than any other nation, but it\'s their unique custom of "pakikahvit" (spite coffee) that\'s fascinating. Finns deliberately brew extra coffee when alone to spite any unexpected visitors who might drop by.',
    image: '/images/culture/finnish-coffee.jpg'
  },
  {
    number: '04',
    title: 'Mongolian Whisper Tradition',
    description: 'In Mongolia\'s vast steppes, there\'s an ancient tradition of "whisper training" where sacred knowledge is passed down through generations by whispering into a child\'s ear at sunrise, believing this is when the mind is most receptive to wisdom.',
    image: '/images/culture/mongolian-whisper.jpg'
  }
];

export default function LesserKnownFacts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center md:text-5xl"
        >
          Lesser-Known Facts About Popular Cultures
        </motion.h2>

        <div className="space-y-16">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
                <div className="inline-block bg-black text-white px-4 py-2 text-sm font-bold rounded-full">
                  {fact.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{fact.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {fact.description}
                </p>
                <Link 
                  href={`/culture/facts/lesser-known/${fact.number}`}
                  className="text-black font-semibold hover:underline group flex items-center"
                >
                  Learn more about this tradition 
                  <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={fact.image}
                  alt={fact.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 