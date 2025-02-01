'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ArrowRight, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CulturalDish {
  id: string;
  name: string;
  description: string;
  image: string;
  origin: string;
  emotion: string;
  ingredients: string[];
}

const culturalDishes: CulturalDish[] = [
  {
    id: '1',
    name: 'Italian Pasta Carbonara',
    description: 'A comforting dish that brings families together, embodying the warmth of Italian hospitality.',
    image: '/images/food/carbonara.jpg',
    origin: 'Rome, Italy',
    emotion: 'Comfort & Nostalgia',
    ingredients: ['Spaghetti', 'Guanciale', 'Eggs', 'Pecorino Romano', 'Black Pepper'],
  },
  {
    id: '2',
    name: 'Japanese Ramen',
    description: 'A soul-warming bowl that offers comfort during cold days and late nights.',
    image: '/images/food/ramen.jpg',
    origin: 'Japan',
    emotion: 'Comfort & Warmth',
    ingredients: ['Noodles', 'Pork Belly', 'Soy Sauce', 'Mirin', 'Green Onions'],
  },
  {
    id: '3',
    name: 'Indian Biryani',
    description: 'A celebration of flavors that brings people together in joy and festivity.',
    image: '/images/food/biryani.jpg',
    origin: 'India',
    emotion: 'Joy & Celebration',
    ingredients: ['Basmati Rice', 'Lamb/Chicken', 'Saffron', 'Whole Spices', 'Yogurt'],
  },
];

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    image: string;
    result?: CulturalDish;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: "What's your ideal comfort zone?",
    options: [
      {
        text: 'A cozy café on a rainy day',
        image: '/images/quiz/cafe.jpg',
        result: culturalDishes[0],
      },
      {
        text: 'A bustling street market',
        image: '/images/quiz/market.jpg',
        result: culturalDishes[1],
      },
      {
        text: 'A lively family gathering',
        image: '/images/quiz/family.jpg',
        result: culturalDishes[2],
      },
    ],
  },
  // Add more questions as needed
];

export function FoodSection() {
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizResult, setQuizResult] = useState<CulturalDish | null>(null);
  const [hoveredDish, setHoveredDish] = useState<string | null>(null);

  const handleQuizAnswer = useCallback((result: CulturalDish) => {
    setQuizResult(result);
  }, []);

  const handleHover = useCallback((id: string | null) => {
    setHoveredDish(id);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-cream-100 overflow-hidden pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                Food That Speaks the Heart
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Emotions are the essence of human existence, transcending borders, 
                languages, and traditions. Through food, we experience the beauty of 
                culture, nostalgia, joy, and love.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="px-8 py-4 bg-secondary-500 text-white rounded-full font-medium hover:bg-secondary-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Your Culinary Journey 🍽️
                </button>
                <button className="px-8 py-4 border-2 border-secondary-500 text-secondary-600 rounded-full font-medium hover:bg-secondary-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Explore Global Flavors 🌎
                </button>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/food/hero-collage.jpg"
                alt="Global Cuisines"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Dishes Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            The Emotional Taste of Culture
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl leading-relaxed">
            Every dish tells a story of tradition, love, and celebration. Explore these 
            dishes to understand the cultural emotions behind them.
          </p>

          <div className="space-y-24">
            {culturalDishes.map((dish, index) => (
              <div
                key={dish.id}
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-2 gap-16 items-center',
                  index % 2 === 1 && 'lg:grid-flow-dense'
                )}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                    {dish.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{dish.description}</p>
                  <div className="space-y-6">
                    <div className="flex items-center text-gray-700">
                      <span className="font-medium mr-3">Origin:</span>
                      {dish.origin}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <span className="font-medium mr-3">Emotion:</span>
                      {dish.emotion}
                    </div>
                  </div>
                </div>
                <div
                  className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                  onMouseEnter={() => handleHover(dish.id)}
                  onMouseLeave={() => handleHover(null)}
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {hoveredDish === dish.id && (
                    <div className="absolute inset-0 bg-black/70 p-8 flex flex-col justify-center text-white transition-opacity duration-300">
                      <h4 className="text-xl font-medium mb-6">Key Ingredients:</h4>
                      <ul className="space-y-3">
                        {dish.ingredients.map((ingredient) => (
                          <li key={ingredient} className="flex items-center text-lg">
                            <Utensils className="h-5 w-5 mr-3" />
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soul Food Quiz Section */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Find Your Soul Food
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Take our fun quiz and discover the dish that matches your personality and 
            emotions. Whether you're an adventurous explorer or a nostalgic homebody, 
            a meal is waiting for you.
          </p>

          {!quizResult ? (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-8">
                {quizQuestions[currentQuizQuestion].question}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quizQuestions[currentQuizQuestion].options.map((option) => (
                  <button
                    key={option.text}
                    onClick={() => option.result && handleQuizAnswer(option.result)}
                    className="group relative rounded-xl overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={option.image}
                        alt={option.text}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="text-white text-center px-4">
                          {option.text}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="relative h-64 mb-6">
                <Image
                  src={quizResult.image}
                  alt={quizResult.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Soul Food Is:</h3>
              <h4 className="text-xl font-serif text-primary mb-4">{quizResult.name}</h4>
              <p className="text-gray-600 mb-6">{quizResult.description}</p>
              <button
                onClick={() => setQuizResult(null)}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 