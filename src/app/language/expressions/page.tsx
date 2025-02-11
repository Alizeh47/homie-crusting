'use client';

import { motion } from 'framer-motion';
import UserSubmissions from '@/components/sections/language/UserSubmissions';

export default function ExpressionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-16 px-4"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Language Expressions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore unique words and expressions from different cultures that capture 
            emotions and experiences in ways that other languages cannot.
          </p>
        </div>
      </motion.section>

      {/* User Submissions Section */}
      <UserSubmissions />
    </main>
  );
} 