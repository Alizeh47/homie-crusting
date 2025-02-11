'use client';

import { motion } from 'framer-motion';
import UserInteraction from '@/components/sections/media/UserInteraction';
import EmotionalExpressions from '@/components/sections/media/EmotionalExpressions';

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 px-4 bg-gradient-to-r from-purple-900 to-pink-900 text-white"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Media & Cultural Influence
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Discover how digital media and influencers shape cultural narratives and 
            emotional expressions across different societies.
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="space-y-20">
        <UserInteraction />
        <EmotionalExpressions />
      </div>
    </main>
  );
} 