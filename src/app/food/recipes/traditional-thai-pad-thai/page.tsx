'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, Utensils } from 'lucide-react';

const recipe = {
  name: 'Traditional Thai Pad Thai',
  description: 'A perfect balance of sweet, sour, and savory flavors that embodies Thai street food culture.',
  prepTime: '15 mins',
  cookTime: '15 mins',
  servings: 4,
  difficulty: 'Medium',
  ingredients: [
    '8 oz rice noodles',
    '8 oz firm tofu, cubed',
    '2 eggs',
    '1 cup bean sprouts',
    '1/4 cup crushed peanuts',
    '2 green onions, chopped',
    '2 cloves garlic, minced',
    'Fresh lime wedges',
    'Fresh cilantro'
  ],
  sauce: [
    '3 tbsp tamarind paste',
    '3 tbsp fish sauce',
    '3 tbsp palm sugar',
    '1 tbsp rice vinegar'
  ],
  instructions: [
    'Soak rice noodles in warm water for 30 minutes until soft.',
    'Mix sauce ingredients in a small bowl until palm sugar dissolves.',
    'Heat oil in a wok over medium-high heat. Add garlic and tofu, cook until golden.',
    'Push ingredients to one side, crack eggs into the pan and scramble.',
    'Add drained noodles and sauce mixture. Stir-fry until noodles are tender.',
    'Add bean sprouts and green onions. Toss well.',
    'Serve hot, garnished with crushed peanuts, lime wedges, and cilantro.'
  ],
  tips: [
    'Use flat rice noodles for authentic texture',
    'Don\'t skip the tamarind - it\'s key to authentic flavor',
    'Have all ingredients ready before starting to cook',
    'Don\'t overcook the noodles - they should be chewy'
  ],
  nutritionFacts: {
    calories: '380 per serving',
    protein: '14g',
    carbs: '52g',
    fat: '12g'
  }
};

export default function PadThaiRecipePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="aspect-[21/9] relative">
            <Image
              src="/images/food/pad-thai.jpg"
              alt="Traditional Thai Pad Thai"
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

            {/* Cooking Tips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#001B3A] text-white rounded-2xl p-8"
            >
              <h2 className="text-2xl font-serif font-bold mb-6">Pro Tips</h2>
              <ul className="space-y-3">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <ChefHat className="w-5 h-5 text-[#F782B4]" />
                    <span>{tip}</span>
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
              <h3 className="text-lg font-serif font-bold text-gray-900 mt-6 mb-3">For the Sauce</h3>
              <ul className="space-y-2">
                {recipe.sauce.map((ingredient) => (
                  <li key={ingredient} className="text-gray-600">{ingredient}</li>
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