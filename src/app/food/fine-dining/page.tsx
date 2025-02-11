'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Clock, DollarSign, MapPin } from 'lucide-react';

const fineDiningRestaurants = [
  {
    name: 'Le Jardin Secret',
    location: 'Paris, France',
    image: '/images/food/fine-dining.jpg',
    cuisine: 'Modern French',
    priceRange: '$$$',
    reservationRequired: 'Yes, 2 weeks in advance',
    dressCode: 'Formal',
    description: 'An elegant establishment offering contemporary French cuisine with a focus on seasonal ingredients and artistic presentation.',
    signature: ['Truffle-infused Foie Gras', 'Lobster Thermidor', 'Grand Marnier Soufflé'],
    rating: 5
  },
  {
    name: 'Sakura Sky',
    location: 'Tokyo, Japan',
    image: '/images/food/sushi.jpg',
    cuisine: 'Modern Japanese',
    priceRange: '$$$$',
    reservationRequired: 'Yes, 1 month in advance',
    dressCode: 'Smart Elegant',
    description: 'A sophisticated dining experience combining traditional Japanese techniques with modern innovation, offering stunning city views.',
    signature: ['Wagyu Tasting Menu', 'Seasonal Omakase', 'Matcha Ceremony'],
    rating: 5
  },
  {
    name: 'Villa Mediterraneo',
    location: 'Amalfi Coast, Italy',
    image: '/images/food/carbonara.jpg',
    cuisine: 'Contemporary Italian',
    priceRange: '$$$',
    reservationRequired: 'Yes, 3 weeks in advance',
    dressCode: 'Smart Casual',
    description: 'Spectacular coastal views complement the refined Italian cuisine, featuring the freshest seafood and local ingredients.',
    signature: ['House-made Pasta', 'Fresh Catch of the Day', 'Limoncello Dessert'],
    rating: 4.5
  }
];

export default function FineDiningPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/images/food/gulab-jamun.jpg"
          alt="Elegant fine dining setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-serif font-bold text-white mb-6"
            >
              Fine Dining Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Discover the art of gastronomy through exquisite culinary experiences
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-gray-900 text-center mb-16"
          >
            Exceptional Dining Destinations
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {fineDiningRestaurants.map((restaurant, index) => (
              <motion.div
                key={restaurant.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-gray-900">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="ml-1 text-gray-600">{restaurant.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5 text-[#F782B4]" />
                      <span>{restaurant.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="w-5 h-5 text-[#F782B4]" />
                      <span>{restaurant.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5 text-[#F782B4]" />
                      <span>{restaurant.reservationRequired}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{restaurant.description}</p>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Signature Dishes:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {restaurant.signature.map((dish) => (
                        <li key={dish}>{dish}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Dress Code:</span> {restaurant.dressCode}
                    </p>
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