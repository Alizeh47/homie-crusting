'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const stories = [
  {
    id: 1,
    title: 'The Sacred Dance of Paro',
    location: 'Bhutan',
    date: 'Spring Festival',
    image: '/images/stories/dance.jpg',
    content:
      'Witnessing the ancient masked dances during the Paro Tsechu festival reveals the deep spiritual connection between Bhutanese people and their centuries-old traditions. Each movement tells a story of devotion and cultural preservation.',
    link: '/stories/sacred-dance-paro'
  },
  {
    id: 2,
    title: 'Tea Ceremony Wisdom',
    location: 'Japan',
    date: 'Cherry Blossom Season',
    image: '/images/stories/tea.jpg',
    content:
      'In the heart of Kyoto, a tea master shared not just the art of tea preparation, but the philosophy of finding beauty in simplicity and peace in the present moment. The ceremony transcended language barriers.',
    link: '/stories/tea-ceremony-wisdom'
  },
  {
    id: 3,
    title: 'Voices of the Mountains',
    location: 'Tibet',
    date: 'Autumn Harvest',
    image: '/images/stories/mountains.jpg',
    content:
      'High in the Himalayas, local monks demonstrate how their traditional throat singing connects the physical world with the spiritual realm. The ancient practice echoes through valleys, carrying centuries of wisdom.',
    link: '/stories/voices-of-mountains'
  },
];

export default function CulturalStories() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-4xl font-bold text-gray-900 md:text-5xl"
        >
          Cultural Stories & Experiences
        </motion.h2>

        <div className="mx-auto max-w-6xl space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col gap-8 md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="relative flex-1">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex-1 space-y-4 ${
                  index % 2 === 1 ? 'md:pr-12 lg:pr-24' : 'md:pl-12 lg:pl-24'
                }`}
              >
                <div className="space-y-1">
                  <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    {story.location}
                  </p>
                  <p className="text-sm text-gray-500">{story.date}</p>
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900">{story.title}</h3>
                <p className="text-lg leading-relaxed text-gray-600">{story.content}</p>
                <Link href={story.link}>
                  <button className="group inline-flex items-center text-blue-600 hover:text-blue-700">
                    Read full story
                    <svg
                      className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 