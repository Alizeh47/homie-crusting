'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';

interface EmotionDetail {
  id: string;
  title: string;
  image: string;
  description: string;
  color: string;
  fullDescription?: string;
  culturalContext?: string;
  examples?: string[];
  relatedConcepts?: { title: string; description: string; }[];
}

const emotionDetails: { [key: string]: EmotionDetail } = {
  'nostalgia-japan': {
    id: 'nostalgia-japan',
    title: 'Nostalgia in Japan',
    image: '/images/media/nostalgia-japan.jpg',
    description: 'The concept of "natsukashii" - a yearning for the past that brings both joy and gentle sadness.',
    color: 'from-blue-500 to-indigo-500',
    fullDescription: "Natsukashii (懐かしい) is a Japanese word that describes a nostalgic feeling, but one that is more complex than simple reminiscence. It combines both happiness for the memory and a gentle sadness that the moment is in the past.",
    culturalContext: 'In Japanese culture, this concept is deeply tied to the appreciation of impermanence (mono no aware) and finding beauty in the transient nature of life.',
    examples: [
      'The smell of freshly cut grass reminding you of childhood summers',
      'Finding an old photograph from school days',
      'Hearing a song that was popular during a significant time in your life'
    ],
    relatedConcepts: [
      {
        title: 'Mono no Aware (物の哀れ)',
        description: 'The awareness of impermanence and the gentle sadness or wistfulness at the passing of things'
      },
      {
        title: 'Wabi-Sabi (侘寂)',
        description: 'Finding beauty in imperfection and impermanence'
      }
    ]
  },
  'joy-brazil': {
    id: 'joy-brazil',
    title: 'Joy in Brazil',
    image: '/images/media/joy-brazil.jpg',
    description: 'The vibrant celebration of "alegria" through carnival, dance, and communal festivities.',
    color: 'from-yellow-500 to-orange-500',
    fullDescription: "Alegria in Brazilian culture represents more than just happiness - it is a state of exuberant joy that is deeply woven into daily life and celebrated through music, dance, and community gatherings.",
    culturalContext: 'Brazilian culture embraces joy as a way of life, finding reasons to celebrate even in challenging times. This resilient happiness is expressed through carnival, samba, and various cultural festivities.',
    examples: [
      'Carnival celebrations in Rio de Janeiro',
      'Spontaneous samba circles in the streets',
      'Beach football games with friends and strangers'
    ],
    relatedConcepts: [
      {
        title: 'Saudade',
        description: 'A deep emotional state of nostalgic longing'
      },
      {
        title: 'Ginga',
        description: 'The Brazilian way of moving through life with style and grace'
      }
    ]
  },
  // Add other emotions similarly...
};

export default function EmotionPage() {
  const router = useRouter();
  const params = useParams();
  const [emotion, setEmotion] = useState<EmotionDetail | null>(null);

  useEffect(() => {
    if (!params) return;
    
    const id = params.id as string;
    const emotionData = emotionDetails[id];
    
    if (!emotionData) {
      router.push('/media/explore');
      return;
    }
    
    setEmotion(emotionData);
  }, [params, router]);

  if (!emotion) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className={`relative h-[60vh] bg-gradient-to-r ${emotion.color}`}>
        <Image
          src={emotion.image}
          alt={emotion.title}
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-full flex items-center justify-center text-center text-white px-4"
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{emotion.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">{emotion.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Full Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Understanding {emotion.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{emotion.fullDescription}</p>
          </motion.section>

          {/* Cultural Context */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Cultural Context</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{emotion.culturalContext}</p>
          </motion.section>

          {/* Examples */}
          {emotion.examples && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">Examples</h2>
              <ul className="space-y-4">
                {emotion.examples.map((example, index) => (
                  <li 
                    key={index}
                    className="flex items-center text-lg text-gray-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500 mr-4" />
                    {example}
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Related Concepts */}
          {emotion.relatedConcepts && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Related Concepts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emotion.relatedConcepts.map((concept, index) => (
                  <div 
                    key={index}
                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-2">{concept.title}</h3>
                    <p className="text-gray-700">{concept.description}</p>
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
              Back to Emotions
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 