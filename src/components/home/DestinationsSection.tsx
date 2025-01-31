import { useState } from 'react';
import { Heart, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'romantic' | 'spiritual' | 'adventure' | 'relaxing';
  location: string;
  bestTime: string;
  emotions: string[];
}

const destinations: Destination[] = [
  {
    id: '1',
    title: 'Romantic Paris',
    description: 'Experience the city of love and passion, where every street corner tells a story of romance.',
    image: '/images/destinations/paris.jpg',
    category: 'romantic',
    location: 'France',
    bestTime: 'Spring (April-June)',
    emotions: ['Love', 'Joy', 'Wonder'],
  },
  {
    id: '2',
    title: 'Spiritual Bali',
    description: 'Find inner peace and tranquility in the spiritual heart of Indonesia.',
    image: '/images/destinations/bali.jpg',
    category: 'spiritual',
    location: 'Indonesia',
    bestTime: 'April-October',
    emotions: ['Peace', 'Serenity', 'Connection'],
  },
  {
    id: '3',
    title: 'Adventure in Patagonia',
    description: "Challenge yourself in the rugged landscapes of South America's southern frontier.",
    image: '/images/destinations/patagonia.jpg',
    category: 'adventure',
    location: 'Argentina/Chile',
    bestTime: 'December-February',
    emotions: ['Excitement', 'Freedom', 'Achievement'],
  },
  {
    id: '4',
    title: 'Relaxing Maldives',
    description: 'Unwind in paradise surrounded by crystal clear waters and white sandy beaches.',
    image: '/images/destinations/maldives.jpg',
    category: 'relaxing',
    location: 'Maldives',
    bestTime: 'November-April',
    emotions: ['Relaxation', 'Bliss', 'Harmony'],
  },
];

export function DestinationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Destination['category'] | 'all'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredDestinations = selectedCategory === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Destinations for Every Emotion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover places that resonate with your emotional journey, from romantic
            getaways to spiritual retreats.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'romantic', 'spiritual', 'adventure', 'relaxing'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Destination['category'] | 'all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} Places
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Image */}
              <div className="relative h-72">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                <div className="flex items-center text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Best time: {destination.bestTime}</span>
                </div>
                <p className={`text-sm transition-opacity duration-300 ${
                  hoveredCard === destination.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  {destination.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {destination.emotions.map((emotion) => (
                    <span
                      key={emotion}
                      className="text-xs px-2 py-1 bg-white/20 rounded-full flex items-center"
                    >
                      <Heart className="h-3 w-3 mr-1" />
                      {emotion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 transition-colors"
          >
            Explore All Destinations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 