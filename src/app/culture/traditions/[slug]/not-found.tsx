'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-32">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Tradition Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We couldn't find the tradition you're looking for. It might have been moved or doesn't exist.
          </p>
          <Link
            href="/culture"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#001B3A] text-white rounded-full hover:bg-[#001B3A]/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Culture Section
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 