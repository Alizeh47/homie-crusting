'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, MessageSquare, Heart, Calendar, Share2, Award } from 'lucide-react';

export default function CommunityPage() {
  const communityFeatures = [
    {
      title: 'Join Cultural Groups',
      description: 'Connect with people who share your cultural interests.',
      icon: Users,
      href: '/groups',
      color: 'bg-purple-500',
    },
    {
      title: 'Share Your Story',
      description: 'Share your cultural experiences and traditions.',
      icon: MessageSquare,
      href: '/stories',
      color: 'bg-blue-500',
    },
    {
      title: 'Volunteer',
      description: 'Help organize cultural events and activities.',
      icon: Heart,
      href: '/volunteer',
      color: 'bg-red-500',
    },
    {
      title: 'Cultural Events',
      description: 'Find and participate in cultural events near you.',
      icon: Calendar,
      href: '/events',
      color: 'bg-green-500',
    },
    {
      title: 'Cultural Exchange',
      description: 'Participate in cultural exchange programs.',
      icon: Share2,
      href: '/exchange',
      color: 'bg-yellow-500',
    },
    {
      title: 'Recognition Program',
      description: 'Get recognized for your cultural contributions.',
      icon: Award,
      href: '/recognition',
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
            Get Involved in Our Community
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our vibrant community of cultural enthusiasts. Share your experiences,
            learn from others, and help build bridges across cultures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={feature.href}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full border border-gray-100 hover:border-gray-200 group">
                  <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="/signup"
            className="inline-block bg-[#05342b] text-white px-8 py-4 rounded-full font-medium hover:bg-[#05342b]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Join Our Community
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 