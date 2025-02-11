'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';
import { notFound } from 'next/navigation';

const emotionsData = {
  'japanese-happiness': {
    title: 'Happiness in Japan – Bowing and Gifts',
    image: '/images/culture/japan-happiness.jpg',
    description: 'In Japan, happiness is often expressed through the act of gift-giving and respectful bowing, emphasizing the joy of giving rather than receiving.',
    color: '#E8D5C4',
    details: {
      overview: 'Japanese expressions of happiness are deeply rooted in the culture of reciprocity and mutual respect, where joy is often shown through subtle gestures and thoughtful actions rather than exuberant displays.',
      practices: [
        'Omiyage (Gift-giving tradition)',
        'Respectful bowing in gratitude',
        'Subtle smiling and nodding',
        'Expression through careful gift wrapping'
      ],
      significance: 'The Japanese approach to expressing happiness reflects the culture\'s emphasis on harmony, consideration for others, and the beauty of subtle gestures.',
      modernContext: 'While younger generations may show happiness more openly, traditional expressions remain important in formal and social settings.'
    }
  },
  'mexican-grief': {
    title: 'Grief in Mexico – Día de los Muertos',
    image: '/images/culture/dia-muertos.jpg',
    description: 'Rather than mourning in black, Mexicans celebrate the lives of departed loved ones with vibrant colors, music, and festive gatherings.',
    color: '#DED0B6',
    details: {
      overview: 'Mexican culture transforms grief into a celebration of life, particularly during Día de los Muertos, where death is viewed not as an end but as a continuation of life in another form.',
      practices: [
        'Creating colorful ofrendas (altars)',
        'Sharing stories of departed loved ones',
        'Playing favorite music of the deceased',
        'Preparing traditional foods and treats'
      ],
      significance: 'This unique approach to grief helps families maintain connections with departed loved ones while finding joy in their memories.',
      modernContext: 'The tradition continues to evolve while maintaining its core purpose of transforming grief into celebration.'
    }
  },
  'french-love': {
    title: 'Love in France – The Art of Letter Writing',
    image: '/images/culture/french-letters.jpg',
    description: 'The French tradition of expressing love through handwritten letters continues to thrive, viewing it as an art form of emotional expression.',
    color: '#B2A59B',
    details: {
      overview: 'French culture has long celebrated the written word as a medium for expressing love, with letter writing considered an art form that allows for deep emotional expression.',
      practices: [
        'Crafting personalized love letters',
        'Using traditional calligraphy',
        'Including poetry and literary references',
        'Preserving letters as family treasures'
      ],
      significance: 'Written expressions of love are seen as timeless artifacts that capture the depth and nuance of romantic feelings.',
      modernContext: 'Despite digital communication, handwritten love letters remain valued in French romantic culture.'
    }
  },
  'indian-gratitude': {
    title: 'Gratitude in India – Touching Feet',
    image: '/images/culture/india-gratitude.jpg',
    description: 'In Indian culture, touching the feet of elders is a profound expression of gratitude and respect, symbolizing the passing of wisdom between generations.',
    color: '#C7BCA1',
    details: {
      overview: 'The tradition of touching feet (Charan Sparsh) is a deeply meaningful gesture that combines gratitude, respect, and the seeking of blessings.',
      practices: [
        'Touching feet during festivals',
        'Seeking blessings before important events',
        'Daily practice with parents/grandparents',
        'Accompanying verbal expressions of respect'
      ],
      significance: 'This gesture acknowledges the wisdom of elders and maintains the flow of traditional knowledge and blessings across generations.',
      modernContext: 'The practice continues in modern India, especially during significant life events and festivals.'
    }
  },
  'african-joy': {
    title: 'Joy in African Cultures – Ululation',
    image: '/images/culture/african-joy.jpg',
    description: 'The practice of ululation - a high-pitched vocal sound - is used across many African cultures to express extreme joy and celebration at special occasions.',
    color: '#D1C0A8',
    details: {
      overview: 'Ululation is a powerful vocal expression of joy that transcends language barriers and creates a shared experience of celebration.',
      practices: [
        'Celebratory ululation at weddings',
        'Welcome ceremonies for honored guests',
        'Achievement celebrations',
        'Cultural performances and festivals'
      ],
      significance: 'This unique expression of joy creates community bonds and marks significant moments with distinctive cultural flair.',
      modernContext: 'Ululation remains a vital part of modern African celebrations while gaining recognition globally.'
    }
  },
  'nordic-hygge': {
    title: 'Contentment in Nordic Hygge',
    image: '/images/culture/nordic-hygge.jpg',
    description: 'The Danish concept of Hygge represents finding joy in coziness and contentment, often expressed through intimate gatherings and creating warm, welcoming spaces.',
    color: '#E6D5B8',
    details: {
      overview: 'Hygge embodies the Nordic approach to finding contentment in simple pleasures and creating warm, inviting atmospheres.',
      practices: [
        'Creating cozy lighting with candles',
        'Sharing meals with close friends',
        'Enjoying quiet moments with hot drinks',
        'Making comfortable, welcoming spaces'
      ],
      significance: 'Hygge represents a mindful approach to contentment that values presence and simple pleasures over material excess.',
      modernContext: 'The concept has gained global popularity while remaining central to Nordic well-being.'
    }
  }
};

export default function EmotionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const emotion = emotionsData[resolvedParams.slug as keyof typeof emotionsData];

  if (!emotion) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/culture"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Culture
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="aspect-[21/9] relative">
            <Image
              src={emotion.image}
              alt={emotion.title}
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
              className="text-5xl md:text-6xl font-serif font-bold text-white text-center max-w-4xl px-4"
            >
              {emotion.title}
            </motion.h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="mb-12">
              <p className="text-xl text-gray-600">{emotion.description}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-600">{emotion.details.overview}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Practices</h2>
                <ul className="space-y-2">
                  {emotion.details.practices.map((practice, index) => (
                    <li key={index} className="text-gray-600">{practice}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cultural Significance</h2>
                <p className="text-gray-600">{emotion.details.significance}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modern Context</h2>
                <p className="text-gray-600">{emotion.details.modernContext}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 