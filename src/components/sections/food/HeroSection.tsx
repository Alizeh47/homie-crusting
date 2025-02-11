'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function FoodHeroSection() {
  const router = useRouter();

  const handleExplore = () => {
    router.push('/food/explore');
  };

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-[#f8e3d6] to-[#fdf1eb] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/food/dining-setup.jpg"
          alt="Cozy dining setup"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Cultural Exchange of Emotions and Feelings: A Universal Connection
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Emotions are the essence of human existence, transcending borders, languages, and traditions. 
            Through cultural exchange, we not only share customs, cuisine, and languages but also the 
            intricate ways in which we experience and communicate feelings.
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.button
              onClick={handleExplore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#001B3A] text-white rounded-full font-medium 
                       hover:bg-[#001B3A]/90 transition-colors shadow-lg flex items-center gap-2"
            >
              Explore Cuisines <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>

          <blockquote className="mt-12 italic text-lg text-gray-600 border-l-4 border-orange-400 pl-4">
            "Food is not just eating energy. It's an experience." - Guy Fieri
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
} 