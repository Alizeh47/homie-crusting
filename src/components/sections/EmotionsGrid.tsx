import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmotionCard {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  author: string;
  tags: string[];
}

const emotionCards: EmotionCard[] = [
  {
    id: '1',
    title: 'The Warmth of a Moroccan Tea Ceremony',
    description: 'Discovering the deep sense of community and hospitality through the ritual of tea preparation and sharing.',
    image: '/images/emotions/moroccan-tea.jpg',
    location: 'Fez, Morocco',
    author: 'Amina Khalil',
    tags: ['Hospitality', 'Community', 'Tradition'],
  },
  {
    id: '2',
    title: 'Japanese Concept of Mono no Aware',
    description: 'Experiencing the gentle sadness of impermanence while watching cherry blossoms fall.',
    image: '/images/emotions/cherry-blossoms.jpg',
    location: 'Kyoto, Japan',
    author: 'Yuki Tanaka',
    tags: ['Contemplation', 'Nature', 'Impermanence'],
  },
  {
    id: '3',
    title: 'The Joy of Italian Family Gatherings',
    description: 'Understanding love and connection through Sunday lunch traditions that span generations.',
    image: '/images/emotions/italian-family.jpg',
    location: 'Tuscany, Italy',
    author: 'Marco Rossi',
    tags: ['Family', 'Food', 'Celebration'],
  },
  {
    id: '4',
    title: 'Finding Peace in Nordic Silence',
    description: 'Discovering the comfort in stillness during the long, dark winters of Scandinavia.',
    image: '/images/emotions/nordic-winter.jpg',
    location: 'Tromsø, Norway',
    author: 'Erik Hansen',
    tags: ['Solitude', 'Peace', 'Nature'],
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
                <p className={cn(
                  'text-sm transition-opacity duration-300',
                  hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                )}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 