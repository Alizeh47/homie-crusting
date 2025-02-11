'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChefHat, Clock, Users, Globe } from 'lucide-react';

interface Dish {
  name: string;
  image: string;
  description: string;
  origin: string;
  history: string;
  preparationTime: string;
  servingSize: string;
  keyIngredients: string[];
  culturalSignificance: string;
}

interface IconicDishClientProps {
  dish: Dish;
}

export default function IconicDishClient({ dish }: IconicDishClientProps) {
  if (!dish) {
    return <div>Loading...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden mb-16"
        >
          <div className="aspect-[21/9] relative">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white text-center">
              {dish.name}
            </h1>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900">About {dish.name}</h2>
              <p className="text-gray-600">{dish.description}</p>
              <p className="text-gray-600">{dish.history}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Key Ingredients</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dish.keyIngredients.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <ChefHat className="w-5 h-5 text-[#F782B4]" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Globe className="w-5 h-5 text-[#F782B4]" />
                  <span>Origin: {dish.origin}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-[#F782B4]" />
                  <span>Prep Time: {dish.preparationTime}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-5 h-5 text-[#F782B4]" />
                  <span>Serving: {dish.servingSize}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#001B3A] text-white rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold mb-4">Cultural Significance</h3>
              <p className="text-white/90">{dish.culturalSignificance}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 