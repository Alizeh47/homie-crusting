import { useState } from 'react';
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

  const handleQuizAnswer = (result: CulturalDish) => {
    setQuizResult(result);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-[#FDF8F3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Food That Speaks the Heart
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Emotions are the essence of human existence, transcending borders, 
                languages, and traditions. Through food, we experience the beauty of 
                culture, nostalgia, joy, and love.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-600 transition-colors">
                  Start Your Culinary Journey 🍽️
                </button>
                <button className="px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors">
                  Explore Global Flavors 🌎
                </button>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/food/hero-collage.jpg"
                alt="Global Cuisines"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Dishes Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            The Emotional Taste of Culture
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Every dish tells a story of tradition, love, and celebration. Explore these 
            dishes to understand the cultural emotions behind them.
          </p>

          <div className="space-y-16">
            {culturalDishes.map((dish, index) => (
              <div
                key={dish.id}
                className={cn(
                  'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
                  index % 2 === 1 && 'lg:grid-flow-dense'
                )}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                    {dish.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{dish.description}</p>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-500">
                      <span className="font-medium mr-2">Origin:</span>
                      {dish.origin}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <span className="font-medium mr-2">Emotion:</span>
                      {dish.emotion}
                    </div>
                  </div>
                </div>
                <div
                  className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden"
                  onMouseEnter={() => setHoveredDish(dish.id)}
                  onMouseLeave={() => setHoveredDish(null)}
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {hoveredDish === dish.id && (
                    <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-center text-white transition-opacity duration-300">
                      <h4 className="text-lg font-medium mb-4">Key Ingredients:</h4>
                      <ul className="space-y-2">
                        {dish.ingredients.map((ingredient) => (
                          <li key={ingredient} className="flex items-center">
                            <Utensils className="h-4 w-4 mr-2" />
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
      <section className="py-20 bg-gray-50">
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