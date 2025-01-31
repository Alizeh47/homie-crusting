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

const destinationOfTheMonth = {
  title: "January's Emotional Escape: Kyoto, Japan",
  description: "Experience the serene beauty of Kyoto's temples dusted with snow, creating a perfect backdrop for introspection and cultural immersion.",
  image: '/images/destinations/kyoto-winter.jpg',
  highlights: [
    'Peaceful snow-covered temple gardens',
    'Warming traditional tea ceremonies',
    'Intimate kaiseki dining experiences',
  ],
  testimonial: {
    text: "Winter in Kyoto brought a sense of peace I've never experienced before. The silence of snow falling on temple roofs is unforgettable.",
    author: "Sarah Chen",
    location: "Singapore",
  },
};

export function DestinationsSection() {
  const [selectedCategory, setSelectedCategory] = useState<Destination['category'] | 'all'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredDestinations = selectedCategory === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === selectedCategory);

  const categoryStyles = {
    romantic: 'bg-pink-50 text-pink-700 hover:bg-pink-100',
    spiritual: 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
    adventure: 'bg-red-50 text-red-700 hover:bg-red-100',
    relaxing: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
  };

  return (
    <section className="py-20 bg-white">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300"
              onMouseEnter={() => setHoveredCard(destination.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{destination.bestTime}</span>
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
                      className="text-xs px-2 py-1 bg-white/20 rounded-full"
                    >
                      {emotion}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Destination of the Month */}
        <div className="relative rounded-2xl overflow-hidden bg-gray-900">
          <div className="absolute inset-0">
            <img
              src={destinationOfTheMonth.image}
              alt={destinationOfTheMonth.title}
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          <div className="relative px-8 py-12 lg:px-12 lg:py-16">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                {destinationOfTheMonth.title}
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                {destinationOfTheMonth.description}
              </p>
              <div className="space-y-4 mb-8">
                {destinationOfTheMonth.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center text-gray-200">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-4 border-primary pl-4 mb-8">
                <p className="text-gray-200 italic mb-2">"{destinationOfTheMonth.testimonial.text}"</p>
                <footer className="text-sm text-gray-400">
                  {destinationOfTheMonth.testimonial.author} from {destinationOfTheMonth.testimonial.location}
                </footer>
              </blockquote>
              <Link
                href="/destinations/kyoto"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-600 transition-colors group"
              >
                Plan Your Trip
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 