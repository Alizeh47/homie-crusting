'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface DiningCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  features: {
    affordability: string;
    accessibility: string;
    experience: string;
  };
}

const categories: DiningCategory[] = [
  {
    id: 'street',
    title: 'Street Food Culture',
    description: 'Experience the vibrant atmosphere of local markets and street vendors, where authentic flavors meet casual dining.',
    image: '/images/food/street-food.jpg',
    features: {
      affordability: 'Budget-friendly, perfect for exploring multiple dishes',
      accessibility: 'Found in bustling markets and street corners',
      experience: 'Casual, lively atmosphere with authentic local interactions'
    }
  },
  {
    id: 'fine',
    title: 'Fine Dining Experience',
    description: 'Immerse yourself in the artistry of culinary excellence, where presentation meets sophisticated flavors.',
    image: '/images/food/fine-dining.jpg',
    features: {
      affordability: 'Premium experience with curated ingredients',
      accessibility: 'Reservation-based exclusive venues',
      experience: 'Elegant ambiance with personalized service'
    }
  }
];

export function StreetVsFine() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Street Food vs. Fine Dining: A Cultural Perspective
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how different dining experiences shape our understanding of culture and create unique emotional connections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-xl"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative h-[500px]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-3xl font-serif font-bold mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg mb-6 opacity-90">
                    {category.description}
                  </p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: hoveredCategory === category.id ? 1 : 0,
                      y: hoveredCategory === category.id ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="font-medium text-[#F782B4] mb-2">Affordability</h4>
                      <p className="text-sm opacity-90">{category.features.affordability}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#F782B4] mb-2">Accessibility</h4>
                      <p className="text-sm opacity-90">{category.features.accessibility}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#F782B4] mb-2">Experience</h4>
                      <p className="text-sm opacity-90">{category.features.experience}</p>
                    </div>
                    
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[#F782B4] font-medium"
                    >
                      Explore {category.id === 'street' ? 'Street Food' : 'Fine Dining'}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 