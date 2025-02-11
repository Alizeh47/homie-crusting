'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users } from 'lucide-react';

const streetFoodSpots = [
  {
    name: 'Mexican Street Tacos',
    location: 'Mexico City Markets',
    image: '/images/food/tacos.jpg',
    price: '$2-5',
    waitTime: '5-10 mins',
    bestTime: 'Evening',
    description: 'Authentic corn tortillas filled with various meats, topped with fresh cilantro and onions.',
    mustTry: ['Al Pastor Tacos', 'Birria Tacos', 'Fish Tacos']
  },
  {
    name: 'Thai Pad Thai',
    location: 'Bangkok Street Vendors',
    image: '/images/food/pad-thai.jpg',
    price: '$3-6',
    waitTime: '5-8 mins',
    bestTime: 'Lunch',
    description: 'Fresh rice noodles stir-fried with shrimp, tofu, eggs, and a perfect blend of sweet and sour sauce.',
    mustTry: ['Shrimp Pad Thai', 'Chicken Pad Thai', 'Vegetarian Pad Thai']
  },
  {
    name: 'Indian Street Chaat',
    location: 'Delhi Street Corners',
    image: '/images/food/street-food.jpg',
    price: '$1-4',
    waitTime: '2-5 mins',
    bestTime: 'Afternoon',
    description: 'Crispy, tangy, and spicy snacks that combine multiple textures and flavors in each bite.',
    mustTry: ['Pani Puri', 'Bhel Puri', 'Aloo Tikki']
  }
];

export default function StreetFoodPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/food/street-food-hero.jpg"
          alt="Vibrant street food scene"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
            >
              Street Food Culture
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Experience the authentic flavors and vibrant atmosphere of global street food culture
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Street Food Spots */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 text-center mb-16"
          >
            Popular Street Food Experiences
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streetFoodSpots.map((spot, index) => (
              <motion.div
                key={spot.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {spot.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-[#F782B4]" />
                      <span>{spot.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-5 h-5 text-[#F782B4]" />
                      <span>Average price: {spot.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-[#F782B4]" />
                      <span>Wait time: {spot.waitTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5 text-[#F782B4]" />
                      <span>Best time: {spot.bestTime}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{spot.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Must Try:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {spot.mustTry.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 