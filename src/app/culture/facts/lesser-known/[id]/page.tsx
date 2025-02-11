'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';
import { notFound } from 'next/navigation';

const factsData = {
  '01': {
    number: '01',
    title: 'Hidden Meanings in Japanese Bowing',
    description: 'The angle and duration of a bow in Japanese culture can convey various meanings, from a casual greeting to deep apology or respect. A 15-degree bow shows basic politeness, while a 45-degree bow expresses sincere gratitude or apology.',
    image: '/images/culture/japanese-bow.jpg',
    details: {
      history: 'The practice of bowing (ojigi) has been an integral part of Japanese culture for centuries, originating from Buddhist and Confucian influences. It represents respect, gratitude, greetings, and apologies.',
      types: [
        'Eshaku (会釈) - 15° bow for casual greetings',
        'Keirei (敬礼) - 30° bow for showing respect',
        'Saikeirei (最敬礼) - 45° bow for deep apology or gratitude'
      ],
      significance: 'Bowing is not just a physical gesture but a complex form of non-verbal communication that reflects Japan\'s emphasis on harmony, respect, and social order.',
      modernContext: 'Even in modern Japan, proper bowing etiquette remains crucial in business, social interactions, and formal occasions.'
    }
  },
  '02': {
    number: '02',
    title: 'The Secret Language of Hand Gestures in Italy',
    description: 'Italian hand gestures are a complex non-verbal language with hundreds of distinct meanings, each telling its own story. Some gestures date back to ancient Rome, making them a living connection to historical communication.',
    image: '/images/culture/italian-gestures.jpg',
    details: {
      history: 'Italian hand gestures evolved as a way to communicate across dialects and under foreign occupation. Many gestures can be traced back to ancient Roman times.',
      types: [
        'Ma che vuoi? - What do you want? (Fingers pinched upward)',
        'Non me ne frega - I don\'t care (Chin flick)',
        'Perfetto - Perfect (Finger kiss)',
        'Piano piano - Slow down/take it easy (Downward facing palm wave)'
      ],
      significance: 'Hand gestures in Italian culture are not just supplements to speech but can convey complete thoughts and emotions independently.',
      modernContext: 'These gestures remain vital in modern Italian communication, especially in informal settings and emotional expressions.'
    }
  },
  '03': {
    number: '03',
    title: 'Finnish Coffee Culture\'s Unique "Sisu"',
    description: 'Finland consumes more coffee per capita than any other nation, but it\'s their unique custom of "pakikahvit" (spite coffee) that\'s fascinating. Finns deliberately brew extra coffee when alone to spite any unexpected visitors who might drop by.',
    image: '/images/culture/finnish-coffee.jpg',
    details: {
      history: 'Coffee arrived in Finland in the 18th century and quickly became integral to Finnish culture, partly due to the long, dark winters and need for warmth and energy.',
      types: [
        'Kahvikutsut - Traditional coffee parties',
        'Pakikahvit - Spite coffee tradition',
        'Pullakahvit - Coffee with sweet bread'
      ],
      significance: 'Coffee in Finnish culture represents hospitality, community, and the concept of "sisu" (determination and resilience).',
      modernContext: 'Modern Finns maintain these traditions while embracing new coffee trends, making Finland the world\'s highest per-capita coffee consumer.'
    }
  },
  '04': {
    number: '04',
    title: 'Mongolian Whisper Tradition',
    description: 'In Mongolia\'s vast steppes, there\'s an ancient tradition of "whisper training" where sacred knowledge is passed down through generations by whispering into a child\'s ear at sunrise, believing this is when the mind is most receptive to wisdom.',
    image: '/images/culture/mongolian-whisper.jpg',
    details: {
      history: 'This tradition dates back to ancient Mongolian shamanic practices, where knowledge was considered sacred and needed to be protected from evil spirits.',
      types: [
        'Dawn whispers - Traditional morning teachings',
        'Ancestral stories - Family history transmission',
        'Practical wisdom - Life skills and survival knowledge'
      ],
      significance: 'The whisper tradition represents the intimate connection between generations and the sacred nature of knowledge transmission.',
      modernContext: 'While less common today, some families still practice this tradition in rural Mongolia, especially for passing down traditional medicine and customs.'
    }
  }
};

export default function LesserKnownFactPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const fact = factsData[resolvedParams.id as keyof typeof factsData];

  if (!fact) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/culture/facts"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Facts
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="aspect-[21/9] relative">
            <Image
              src={fact.image}
              alt={fact.title}
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
              {fact.title}
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
              <div className="inline-block bg-black text-white px-4 py-2 text-sm font-bold rounded-full mb-6">
                {fact.number}
              </div>
              <p className="text-xl text-gray-600">{fact.description}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Historical Context</h2>
                <p className="text-gray-600">{fact.details.history}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Types and Variations</h2>
                <ul className="space-y-2">
                  {fact.details.types.map((type, index) => (
                    <li key={index} className="text-gray-600">{type}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cultural Significance</h2>
                <p className="text-gray-600">{fact.details.significance}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modern Context</h2>
                <p className="text-gray-600">{fact.details.modernContext}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 