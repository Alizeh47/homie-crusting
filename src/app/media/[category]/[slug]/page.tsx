'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';

interface MediaDetail {
  title: string;
  image: string;
  impact: string;
  synopsis: string[];
  country?: string;
  creator?: string;
  host?: string;
  author?: string;
  artist?: string;
  details?: {
    releaseYear?: string;
    duration?: string;
    genre?: string[];
    awards?: string[];
    platform?: string;
    episodes?: number;
    publisher?: string;
    medium?: string;
  };
  relatedWorks?: {
    title: string;
    description: string;
  }[];
}

const mediaDetails: Record<string, Record<string, MediaDetail>> = {
  movies: {
    'parasite': {
      title: 'Parasite',
      image: '/images/media/parasite.jpg',
      country: 'South Korea',
      impact: 'A powerful commentary on social class dynamics.',
      synopsis: [
        'A gripping tale of two families intertwined by fate',
        'Where wealth meets poverty in modern Seoul'
      ],
      details: {
        releaseYear: '2019',
        duration: '2h 12min',
        genre: ['Drama', 'Thriller', 'Comedy'],
        awards: ['Academy Award for Best Picture', 'Palme d\'Or at Cannes Film Festival'],
        platform: 'Theatrical Release'
      },
      relatedWorks: [
        {
          title: 'Memories of Murder',
          description: 'Another masterpiece by director Bong Joon-ho'
        },
        {
          title: 'Snowpiercer',
          description: 'A thought-provoking exploration of social hierarchy'
        }
      ]
    },
    // Add other movies...
  },
  // Add other categories...
};

export default function MediaDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [mediaItem, setMediaItem] = useState<MediaDetail | null>(null);

  useEffect(() => {
    if (!params) return;
    
    const category = params.category as string;
    const slug = params.slug as string;
    
    const itemDetails = mediaDetails[category]?.[slug];
    if (!itemDetails) {
      router.push('/media/explore');
      return;
    }
    
    setMediaItem(itemDetails);
  }, [params, router]);

  if (!mediaItem) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <Image
          src={mediaItem.image}
          alt={mediaItem.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-full flex items-center justify-center text-center text-white px-4"
        >
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{mediaItem.title}</h1>
            <p className="text-xl md:text-2xl">{mediaItem.impact}</p>
            <p className="mt-4 text-lg text-white/80">
              {mediaItem.country || mediaItem.creator || mediaItem.host || mediaItem.author || mediaItem.artist}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Synopsis */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Synopsis</h2>
            <div className="space-y-4">
              {mediaItem.synopsis.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Details */}
          {mediaItem.details && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(mediaItem.details).map(([key, value]) => (
                  <div key={key} className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold capitalize mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-gray-700">
                      {Array.isArray(value) ? value.join(', ') : value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Related Works */}
          {mediaItem.relatedWorks && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Related Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mediaItem.relatedWorks.map((work, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                    <p className="text-gray-700">{work.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Back Button */}
          <div className="text-center pt-8">
            <button
              onClick={() => router.push('/media/explore')}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full
                       hover:shadow-lg transition-shadow duration-300"
            >
              Back to Media
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 