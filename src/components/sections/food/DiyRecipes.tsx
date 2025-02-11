'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, ChefHat, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Recipe {
  id: string;
  name: string;
  image: string;
  description: string;
  time: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  keyIngredients: string[];
  culture: string;
  slug: string;
}

const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Traditional Thai Pad Thai',
    image: '/images/food/pad-thai.jpg',
    description: 'A perfect balance of sweet, sour, and savory flavors that embodies Thai street food culture.',
    time: '30 mins',
    difficulty: 'Medium',
    servings: 4,
    keyIngredients: ['Rice noodles', 'Tofu', 'Bean sprouts', 'Tamarind paste', 'Palm sugar'],
    culture: 'Thai',
    slug: 'traditional-thai-pad-thai'
  },
  {
    id: '2',
    name: 'Homemade Italian Pasta',
    image: '/images/food/carbonara.jpg',
    description: 'Learn the art of making fresh pasta from scratch, a cornerstone of Italian cuisine.',
    time: '45 mins',
    difficulty: 'Medium',
    servings: 6,
    keyIngredients: ['00 flour', 'Eggs', 'Olive oil', 'Salt', 'Semolina'],
    culture: 'Italian',
    slug: 'homemade-italian-pasta'
  },
  {
    id: '3',
    name: 'Korean Kimchi',
    image: '/images/food/kimchi.jpg',
    description: 'Master the traditional fermentation process of this Korean staple dish.',
    time: '1 hour + fermentation',
    difficulty: 'Hard',
    servings: 8,
    keyIngredients: ['Napa cabbage', 'Korean red pepper flakes', 'Garlic', 'Ginger', 'Fish sauce'],
    culture: 'Korean',
    slug: 'korean-kimchi'
  }
];

export function DiyRecipes() {
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const router = useRouter();

  const handleViewRecipe = (slug: string) => {
    router.push(`/food/recipes/${slug}`);
  };

  return (
    <section className="py-24 bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-6">
            DIY Recipes from Different Cultures
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Bring the world into your kitchen with these authentic recipes that carry generations of tradition and love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl"
              onMouseEnter={() => setSelectedRecipe(recipe.id)}
              onMouseLeave={() => setSelectedRecipe(null)}
            >
              <div className="relative h-48">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#001B3A] text-white px-3 py-1 rounded-full text-sm">
                  {recipe.culture}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {recipe.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {recipe.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#001B3A]" />
                    <span className="text-sm">{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-[#001B3A]" />
                    <span className="text-sm">{recipe.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#001B3A]" />
                    <span className="text-sm">Serves {recipe.servings}</span>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: selectedRecipe === recipe.id ? 1 : 0,
                    height: selectedRecipe === recipe.id ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <h4 className="font-medium text-[#001B3A] mb-2">Key Ingredients:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {recipe.keyIngredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </motion.div>

                <motion.button
                  onClick={() => handleViewRecipe(recipe.slug)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-3 bg-[#001B3A] text-white rounded-lg font-medium hover:bg-[#001B3A]/90 transition-colors"
                >
                  View Full Recipe
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 