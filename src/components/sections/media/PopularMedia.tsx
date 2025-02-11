'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type MediaItem = {
  title: string;
  image: string;
  impact: string;
  synopsis: string[];
  country?: string;
  creator?: string;
  host?: string;
  author?: string;
  artist?: string;
  slug?: string;
};

type CategoryType = 'movies' | 'documentaries' | 'podcasts' | 'books' | 'digitalArt';

const mediaCategories: Record<string, MediaItem[]> = {
  movies: [
    {
      title: 'Parasite',
      image: '/images/media/parasite.jpg',
      country: 'South Korea',
      impact: 'A powerful commentary on social class dynamics.',
      synopsis: [
        'A gripping tale of two families intertwined by fate',
        'Where wealth meets poverty in modern Seoul'
      ],
      slug: 'parasite'
    },
    {
      title: 'Life is Beautiful',
      image: '/images/media/life-beautiful.jpg',
      country: 'Italy',
      impact: 'A heartwarming tale of love and hope.',
      synopsis: [
        'The extraordinary story of paternal love in difficult times',
        'Where imagination triumphs over adversity'
      ]
    },
    {
      title: 'Amelie',
      image: '/images/media/amelie.jpg',
      country: 'France',
      impact: 'A whimsical journey through Paris.',
      synopsis: [
        'A shy waitress on a mission to spread joy',
        'Finding love while helping others find happiness'
      ]
    }
  ],
  documentaries: [
    {
      title: 'Planet Earth',
      image: '/images/media/planet-earth.jpg',
      creator: 'BBC Earth',
      impact: 'Revealing hidden wonders of nature.',
      synopsis: [
        'Journey through untouched wilderness',
        'Witnessing spectacular moments in nature'
      ]
    },
    {
      title: 'Culinary Masters',
      image: '/images/media/chefs-table.jpg',
      creator: 'Netflix',
      impact: 'Culinary artistry meets cultural heritage.',
      synopsis: [
        'Masters of global cuisine share their stories',
        'Where food becomes an art form'
      ]
    }
  ],
  podcasts: [
    {
      title: 'Cultural Chronicles',
      image: '/images/media/cultural-chronicles.jpg',
      host: 'Maria Chen',
      impact: 'Weekly deep dives into global traditions.',
      synopsis: [
        'Exploring ancient customs in modern times',
        'Stories that bridge generations'
      ]
    },
    {
      title: 'Global Beats',
      image: '/images/media/global-beats.jpg',
      host: 'DJ Mundo',
      impact: 'Music that transcends borders.',
      synopsis: [
        'Rhythm and melodies from around the world',
        'The universal language of music'
      ]
    }
  ],
  books: [
    {
      title: 'The Shadow Lines',
      image: '/images/media/shadow-lines.jpg',
      author: 'Amitav Ghosh',
      impact: 'Borders blur in this cultural masterpiece.',
      synopsis: [
        'Memory and identity across continents',
        'Where past and present interweave'
      ]
    },
    {
      title: 'Norwegian Wood',
      image: '/images/media/norwegian-wood.jpg',
      author: 'Haruki Murakami',
      impact: 'Love and loss in modern Japan.',
      synopsis: [
        'A nostalgic journey through youth',
        'Where music meets memory'
      ]
    }
  ],
  digitalArt: [
    {
      title: 'Future Traditions',
      image: '/images/media/future-tradition.jpg',
      artist: 'Maya Digital',
      impact: 'Where tradition meets technology.',
      synopsis: [
        'Ancient motifs in digital landscapes',
        'Bridging centuries through pixels'
      ]
    },
    {
      title: 'Virtual Heritage',
      image: '/images/media/virtual-heritage.jpg',
      artist: 'Tech Artisans',
      impact: 'Preserving culture in virtual space.',
      synopsis: [
        'Cultural landmarks reimagined',
        'History preserved in digital form'
      ]
    }
  ]
};

const CategoryIcon = ({ 
  category, 
  isSelected 
}: { 
  category: CategoryType;
  isSelected: boolean 
}) => {
  const iconClasses = `w-12 h-12 mb-3 transition-all duration-500 ${isSelected ? 'text-white' : 'text-purple-600'}`;

  const icons: Record<CategoryType, JSX.Element> = {
    movies: (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="animate-draw" d="M7 4v16m10-16v16M3 8h18M3 16h18" strokeLinecap="round" />
        <rect className="animate-fade-in" x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" />
      </svg>
    ),
    documentaries: (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="animate-draw" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" />
      </svg>
    ),
    podcasts: (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="animate-pulse-slow" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 2.071-.84 3.946-2.197 5.303m-2.618 2.708L7.49 21.872m10.557-6.492L15.383 18" strokeLinecap="round" />
        <path className="animate-draw" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" />
      </svg>
    ),
    books: (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="animate-draw" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" />
      </svg>
    ),
    digitalArt: (
      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path className="animate-draw" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" />
      </svg>
    )
  };

  return icons[category];
};

export default function PopularMedia() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleExploreMore = (category: string, item: MediaItem) => {
    const slug = item.slug || item.title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/media/${category}/${slug}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16 text-center">
          Top International Media & Influencers
          <span className="block text-2xl font-normal text-gray-600 mt-4">
            Bridging Cultural Gaps Through Creative Expression
          </span>
        </h2>

        {/* Category Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {Object.keys(mediaCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-500 
                ${selectedCategory === category 
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white scale-105' 
                  : 'bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50'
                } shadow-lg hover:shadow-xl`}
            >
              <CategoryIcon category={category as CategoryType} isSelected={selectedCategory === category} />
              <h3 className="text-lg font-bold capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className={`h-1 w-10 mx-auto mt-2 transition-all duration-500
                ${selectedCategory === category 
                  ? 'bg-white' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'}`} 
              />
            </button>
          ))}
        </div>

        {/* Media Cards */}
        {selectedCategory && (
          <div className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaCategories[selectedCategory].map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideUp 0.5s ease-out forwards'
                  }}
                >
                  <div className="relative h-[300px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay with synopsis */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {item.synopsis.map((line, index) => (
                          <p
                            key={index}
                            className="text-white/90 text-sm italic mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <h4 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {item.country || item.creator || item.host || item.author || item.artist}
                    </p>
                    <p className="text-gray-700">{item.impact}</p>
                    <button 
                      onClick={() => handleExploreMore(selectedCategory, item)}
                      className="mt-4 text-purple-600 font-medium hover:text-purple-700 transition-colors"
                    >
                      Explore More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 1.5s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
} 