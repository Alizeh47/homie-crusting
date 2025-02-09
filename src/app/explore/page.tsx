'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Utensils, Map, Languages, Film, MessageCircle } from 'lucide-react';

export default function ExplorePage() {
  const categories = [
    {
      title: 'Cultural Facts',
      description: 'Discover fascinating traditions and customs from around the world.',
      icon: Globe,
      href: '/culture',
      color: 'bg-blue-500',
    },
    {
      title: 'Global Cuisine',
      description: 'Explore diverse flavors and culinary traditions.',
      icon: Utensils,
      href: '/food',
      color: 'bg-green-500',
    },
    {
      title: 'Destinations',
      description: 'Find your next cultural adventure destination.',
      icon: Map,
      href: '/travel',
      color: 'bg-purple-500',
    },
    {
      title: 'Languages',
      description: 'Learn about different languages and expressions.',
      icon: Languages,
      href: '/language',
      color: 'bg-yellow-500',
    },
    {
      title: 'Media & Stories',
      description: 'Watch and read cultural stories and experiences.',
      icon: Film,
      href: '/media',
      color: 'bg-red-500',
    },
    {
      title: 'Community',
      description: 'Connect with cultural enthusiasts worldwide.',
      icon: MessageCircle,
      href: '/community',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Cultural Experiences
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dive into a world of diverse cultures, traditions, and experiences. 
            Choose your path and start your cultural journey today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={category.href}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 hover:border-gray-200 group">
                  <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 