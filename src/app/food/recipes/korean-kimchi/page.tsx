'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, Utensils } from 'lucide-react';

const recipe = {
  name: 'Korean Kimchi',
  description: 'Master the traditional fermentation process of this Korean staple dish.',
  prepTime: '1 hour',
  fermentTime: '1-5 days',
  servings: 8,
  difficulty: 'Hard',
  mainIngredients: [
    '1 large Napa cabbage',
    '1/4 cup sea salt',
    '1/4 cup Korean red pepper flakes (gochugaru)',
    '4 cloves garlic, minced',
    '1 tablespoon grated ginger',
    '2 tablespoons fish sauce',
    '2 tablespoons salted shrimp (saeujeot)',
    '1 tablespoon sugar',
    '4 green onions, chopped',
    '1/4 cup water'
  ],
  vegetables: [
    '1 medium daikon radish, julienned',
    '2 carrots, julienned',
    '1 small Asian pear, grated (optional)'
  ],
  instructions: [
    'Cut cabbage into quarters and remove core. Cut into 2-inch pieces.',
    'Salt cabbage and let it sit for 2 hours, then rinse thoroughly.',
    'Mix red pepper flakes, garlic, ginger, fish sauce, shrimp, and sugar.',
    'Add vegetables to the seasoning mixture.',
    'Combine with drained cabbage and mix well.',
    'Pack into clean jars, leaving some headspace.',
    'Let ferment at room temperature for 1-5 days.',
    'Store in refrigerator to slow fermentation.'
  ],
  tips: [
    'Use coarse sea salt for salting cabbage',
    'Ensure all equipment is clean to prevent unwanted bacteria',
    'Press down kimchi to remove air bubbles',
    'Taste daily during fermentation to achieve desired flavor'
  ],
  stages: [
    'Fresh (0-1 day): Crisp and spicy',
    'Early fermentation (2-3 days): Tangy develops',
    'Ripe (4-5 days): Full sour flavor',
    'Mature (2+ weeks): Deep, complex taste'
  ],
  nutritionFacts: {
    calories: '40 per serving',
    protein: '2g',
    carbs: '9g',
    fat: '0g'
  }
};

export default function KimchiRecipePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="aspect-[21/9] relative">
            <Image
              src="/images/food/kimchi.jpg"
              alt="Korean Kimchi"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-serif font-bold text-white text-center"
            >
              {recipe.name}
            </motion.h1>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-600 text-lg">{recipe.description}</p>
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Instructions</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F782B4] text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="text-gray-600">{step}</p>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Fermentation Stages */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#001B3A] text-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Fermentation Stages</h2>
              <ul className="space-y-3">
                {recipe.stages.map((stage, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#F782B4]" />
                    <span>{stage}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Quick Info</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-5 h-5 text-[#F782B4]" />
                  <span>Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Utensils className="w-5 h-5 text-[#F782B4]" />
                  <span>Ferment: {recipe.fermentTime}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-5 h-5 text-[#F782B4]" />
                  <span>Serves: {recipe.servings}</span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Main Ingredients</h2>
              <ul className="space-y-2">
                {recipe.mainIngredients.map((ingredient) => (
                  <li key={ingredient} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
              <h3 className="text-lg font-serif font-bold text-gray-900 mt-6 mb-3">Vegetables</h3>
              <ul className="space-y-2">
                {recipe.vegetables.map((ingredient) => (
                  <li key={ingredient} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Pro Tips */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Pro Tips</h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <ChefHat className="w-5 h-5 flex-shrink-0 text-[#F782B4] mt-1" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition Facts */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Nutrition Facts</h2>
              <div className="space-y-2">
                {Object.entries(recipe.nutritionFacts).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-gray-600">
                    <span className="capitalize">{key}:</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 