import { useState } from 'react';
import { Heart, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';

interface EmotionCard {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  tags: string[];
}

const emotionCards: EmotionCard[] = [
  {
    id: '1',
    title: 'The Joy of Hygge',
    description: 'Experience the Danish concept of cozy contentment and well-being.',
    location: 'Denmark',
    image: '/images/emotions/hygge.jpg',
    tags: ['Comfort', 'Contentment', 'Community'],
  },
  {
    id: '2',
    title: 'Ubuntu Spirit',
    description: 'Discover the African philosophy of human connectedness and compassion.',
    location: 'South Africa',
    image: '/images/emotions/ubuntu.jpg',
    tags: ['Connection', 'Humanity', 'Compassion'],
  },
  {
    id: '3',
    title: 'Wabi-Sabi Beauty',
    description: 'Embrace the Japanese appreciation of imperfect beauty and transience.',
    location: 'Japan',
    image: '/images/emotions/wabi-sabi.jpg',
    tags: ['Acceptance', 'Tranquility', 'Appreciation'],
  },
  {
    id: '4',
    title: 'Saudade Feeling',
    description: 'Feel the Portuguese emotion of longing and melancholic nostalgia.',
    location: 'Portugal',
    image: '/images/emotions/saudade.jpg',
    tags: ['Nostalgia', 'Longing', 'Memory'],
  },
];

export function EmotionsGrid() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Emotions Around the World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore unique emotional concepts and expressions from different cultures,
            each telling a story of human connection and understanding.
          </p>
        </div>

        {/* Emotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {emotionCards.map((card) => (
            <div
              key={card.id}
              className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Image */}
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{card.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className={`text-sm transition-opacity duration-300 ${
                  hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-white/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/emotions"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 transition-colors"
          >
            <Globe className="mr-2 h-5 w-5" />
            Explore More Emotions
          </Link>
        </div>
      </div>
    </section>
  );
} 