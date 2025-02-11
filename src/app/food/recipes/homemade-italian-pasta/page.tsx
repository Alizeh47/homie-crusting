'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, Utensils } from 'lucide-react';

const recipe = {
  name: 'Homemade Italian Pasta',
  description: 'Learn the art of making fresh pasta from scratch, a cornerstone of Italian cuisine.',
  prepTime: '30 mins',
  restTime: '30 mins',
  cookTime: '2-3 mins',
  servings: 6,
  difficulty: 'Medium',
  ingredients: [
    '3 cups (400g) 00 flour',
    '4 large eggs',
    '1 tablespoon olive oil',
    '1/2 teaspoon salt',
    'Semolina flour for dusting'
  ],
  basicSauce: [
    '2 tablespoons olive oil',
    '2 cloves garlic, minced',
    'Fresh herbs (basil, parsley)',
    'Salt and pepper to taste',
    'Grated Parmigiano-Reggiano'
  ],
  instructions: [
    'Mound flour on a clean surface and create a well in the center.',
    'Crack eggs into the well, add olive oil and salt.',
    'Using a fork, gradually mix eggs into flour until dough starts forming.',
    'Knead dough for 10 minutes until smooth and elastic.',
    'Wrap in plastic and let rest for 30 minutes.',
    'Divide dough into portions and roll through pasta machine.',
    'Cut into desired shapes (fettuccine, tagliatelle, etc.).',
    'Cook in salted boiling water until al dente (2-3 minutes).'
  ],
  tips: [
    'Use room temperature eggs for better dough consistency',
    'Knead until dough is smooth and springs back when poked',
    'Let dough rest to allow gluten to relax',
    'Keep unused dough covered while working'
  ],
  variations: [
    'Add spinach puree for green pasta',
    'Mix in squid ink for black pasta',
    'Incorporate beetroot for red pasta',
    'Use semolina for more textured pasta'
  ],
  nutritionFacts: {
    calories: '200 per serving',
    protein: '7g',
    carbs: '38g',
    fat: '3g'
  }
};

export default function ItalianPastaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="aspect-[21/9] relative">
            <Image
              src="/images/food/carbonara.jpg"
              alt="Homemade Italian Pasta"
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

            {/* Variations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#001B3A] text-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Pasta Variations</h2>
              <ul className="space-y-3">
                {recipe.variations.map((variation, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#F782B4]" />
                    <span>{variation}</span>
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
                  <span>Cook: {recipe.cookTime}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-5 h-5 text-[#F782B4]" />
                  <span>Serves: {recipe.servings}</span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">Ingredients</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
              <h3 className="text-lg font-serif font-bold text-gray-900 mt-6 mb-3">Basic Sauce</h3>
              <ul className="space-y-2">
                {recipe.basicSauce.map((ingredient) => (
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