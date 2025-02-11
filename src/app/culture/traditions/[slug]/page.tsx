'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Info } from 'lucide-react';
import { notFound } from 'next/navigation';
import { use } from 'react';

// Tradition data with additional details
const traditionsData = {
  'tomatina-festival': {
    title: 'Tomatina Festival',
    location: 'Buñol, Spain',
    image: '/images/culture/tomatina.jpg',
    description: 'A unique festival where thousands gather for the world\'s biggest food fight, throwing ripe tomatoes at each other in pure joy.',
    date: 'Last Wednesday of August',
    participants: '20,000+ people annually',
    history: 'La Tomatina began in 1945 during a parade, when young people started a spontaneous tomato fight. Despite initial opposition from local authorities, it became an annual tradition, drawing participants from around the world.',
    rules: [
      'Only squash tomatoes before throwing',
      'No hard objects or torn clothing allowed',
      'Make way for trucks and emergency vehicles',
      'Stop throwing when you hear the second shot'
    ],
    funFacts: [
      'Over 150,000 tomatoes are used',
      'The fight lasts exactly one hour',
      'Tomatoes are specially grown for the event',
      'Streets are cleaned spotless within hours'
    ]
  },
  'lantern-festival': {
    title: 'Lantern Festival',
    location: 'Various locations, Thailand',
    image: '/images/culture/lantern.jpg',
    description: 'Thousands of paper lanterns are released into the night sky, creating a mesmerizing spectacle of light and hope.',
    date: 'November (during Yi Peng)',
    participants: 'Thousands across Thailand',
    history: 'The Lantern Festival, or Yi Peng, has roots in ancient Brahmin traditions. It marks the end of the rainy season and is believed to ward off bad luck while welcoming good fortune.',
    rules: [
      'Use biodegradable lanterns',
      'Wait for official release times',
      'Light lanterns away from structures',
      'Follow local regulations'
    ],
    funFacts: [
      'Each lantern represents letting go of misfortune',
      'The festival coincides with the full moon',
      'Traditional ceremonies accompany releases',
      'Modern versions use LED lights in some areas'
    ]
  },
  'holi': {
    title: 'Holi',
    location: 'India',
    image: '/images/culture/holi.jpg',
    description: 'The festival of colors where people come together to celebrate the victory of good over evil by throwing vibrant colored powders.',
    date: 'Full moon day in Phalgun (Feb-Mar)',
    participants: 'Millions across India and worldwide',
    history: 'Holi celebrates the Hindu legend of Prahlad and Holika, symbolizing the triumph of good over evil. It also marks the arrival of spring and the end of winter.',
    rules: [
      'Use natural, skin-safe colors',
      'Ask permission before applying colors',
      'Respect those who don\'t wish to participate',
      'Keep water use moderate'
    ],
    funFacts: [
      'Traditional colors were made from flowers',
      'Celebrations last multiple days',
      'Each region has unique Holi traditions',
      'Special foods mark the festival'
    ]
  },
  'day-of-the-dead': {
    title: 'Day of the Dead',
    location: 'Mexico',
    image: '/images/culture/day-of-dead.jpg',
    description: 'A celebration of life and death where families honor their ancestors with colorful altars, sugar skulls, and marigold flowers.',
    date: 'November 1-2',
    participants: 'Millions across Mexico',
    history: 'Día de los Muertos blends indigenous Aztec rituals with Catholic traditions. The belief is that during these days, the spirits of deceased loved ones return to visit their families.',
    rules: [
      'Respect private altars (ofrendas)',
      'Ask permission before photographing',
      'Participate in local customs respectfully',
      'Learn about the cultural significance'
    ],
    funFacts: [
      'Marigolds guide spirits with their scent',
      'Each altar item has symbolic meaning',
      'UNESCO recognizes it as cultural heritage',
      'Celebrations vary by region'
    ]
  },
  'cheese-rolling': {
    title: 'Cooper\'s Hill Cheese Rolling',
    location: 'Gloucester, England',
    image: '/images/culture/cheese-rolling.jpg',
    description: 'Participants chase a wheel of cheese down a steep hill in this centuries-old tradition, risking life and limb for glory.',
    date: 'Spring Bank Holiday Monday',
    participants: 'Hundreds of competitors and thousands of spectators',
    history: 'The origins are unclear, but theories suggest it began as a pagan ritual for fertility and harvest. The tradition has continued for centuries, drawing thrill-seekers from around the world.',
    rules: [
      'Enter at own risk',
      'No intentional interference with other runners',
      'First to catch the cheese or cross the line wins',
      'Follow marshal instructions'
    ],
    funFacts: [
      'The cheese reaches speeds of 70 mph',
      'The hill has a 45-degree incline',
      'Winners keep the 8-pound cheese wheel',
      'Very few catch the cheese itself'
    ]
  },
  'songkran': {
    title: 'Songkran Water Festival',
    location: 'Thailand',
    image: '/images/culture/songkran.jpg',
    description: 'A nationwide water fight marking Thai New Year, symbolizing the washing away of misfortune and welcoming good luck.',
    date: 'April 13-15',
    participants: 'Millions across Thailand',
    history: 'Songkran derives from a Sanskrit word meaning "passing" or "approaching." Originally, it involved gentle sprinkling of water as a blessing, but has evolved into a joyous nationwide water festival.',
    rules: [
      'Use clean water only',
      'Avoid high-pressure water guns',
      'Respect religious ceremonies',
      'Keep valuable electronics protected'
    ],
    funFacts: [
      'Traditional blessing with scented water',
      'Three official holidays',
      'World\'s biggest water fight',
      'Combines with Buddhist ceremonies'
    ]
  },
  'bull-running': {
    title: 'Running of the Bulls',
    location: 'Pamplona, Spain',
    image: '/images/culture/bull-running.jpg',
    description: 'Part of the San Fermín festival where participants run alongside bulls through the streets of Pamplona.',
    date: 'July 7-14',
    participants: 'Thousands of runners and spectators',
    history: 'The tradition began in northeastern Spain during the 14th century, when cattle were transported to the marketplace for sale. The modern festival gained international fame after Ernest Hemingway\'s "The Sun Also Rises."',
    rules: [
      'Must be 18 or older to participate',
      'No touching or taunting the bulls',
      'No intoxication allowed',
      'Follow security personnel instructions'
    ],
    funFacts: [
      'The run is only 875 meters long',
      'Bulls can reach 35 mph',
      'Morning runs start at 8 AM sharp',
      'Six bulls are released each day'
    ]
  }
};

export default function TraditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const tradition = traditionsData[resolvedParams.slug as keyof typeof traditionsData];

  if (!tradition) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <div className="aspect-[21/9] relative">
            <Image
              src={tradition.image}
              alt={tradition.title}
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
              className="text-5xl md:text-6xl font-serif font-bold text-white text-center"
            >
              {tradition.title}
            </motion.h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="font-serif text-3xl font-bold text-gray-900">About the Tradition</h2>
              <p className="text-gray-600">{tradition.description}</p>
              <p className="text-gray-600">{tradition.history}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Rules and Guidelines</h3>
              <ul className="grid grid-cols-1 gap-4">
                {tradition.rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <Info className="w-5 h-5 text-[#F782B4]" />
                    {rule}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-[#F782B4]" />
                  <span>Location: {tradition.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Calendar className="w-5 h-5 text-[#F782B4]" />
                  <span>Date: {tradition.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Users className="w-5 h-5 text-[#F782B4]" />
                  <span>Participation: {tradition.participants}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#001B3A] text-white rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold mb-4">Fun Facts</h3>
              <ul className="space-y-3">
                {tradition.funFacts.map((fact, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-[#F782B4]">•</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 