'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Utensils, Star, Globe } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface PollOption {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  votes: number;
  gradient: string;
}

// Static poll options data
const staticPollOptions: PollOption[] = [
  {
    id: '1',
    title: 'Traditional Cuisine',
    description: 'Time-honored recipes passed down through generations',
    icon: <ChefHat className="w-8 h-8" />,
    votes: 145,
    gradient: 'from-[#F782B4] to-[#001B3A]'
  },
  {
    id: '2',
    title: 'Fusion Food',
    description: 'Creative blends of different cultural cuisines',
    icon: <Utensils className="w-8 h-8" />,
    votes: 128,
    gradient: 'from-[#F782B4] to-[#001B3A]'
  },
  {
    id: '3',
    title: 'Street Food',
    description: 'Authentic local flavors from around the world',
    icon: <Globe className="w-8 h-8" />,
    votes: 156,
    gradient: 'from-[#F782B4] to-[#001B3A]'
  },
  {
    id: '4',
    title: 'Fine Dining',
    description: 'Elevated culinary experiences and artistic presentation',
    icon: <Star className="w-8 h-8" />,
    votes: 112,
    gradient: 'from-[#F782B4] to-[#001B3A]'
  }
];

export function CuisinePoll() {
  const [pollOptions, setPollOptions] = useState<PollOption[]>(staticPollOptions);
  const [votedFor, setVotedFor] = useState<string | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);
  const { toast } = useToast();

  const totalVotes = pollOptions.reduce((sum, option) => sum + option.votes, 0);

  const handleVote = (id: string) => {
    if (votedFor) return;

    // Update local state only
    setPollOptions(options =>
      options.map(option =>
        option.id === id
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    );
    setVotedFor(id);
    localStorage.setItem('cuisine-poll-vote', id);

    toast({
      title: '🎉 Thank you for voting!',
      description: 'Your culinary voice has been heard.',
    });
  };

  const getVotePercentage = (votes: number) => {
    return totalVotes === 0 ? 0 : ((votes / totalVotes) * 100).toFixed(1);
  };

  return (
    <section className="py-24 min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">
            Your Culinary Voice Matters
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join the global conversation about food culture and help us understand what matters most to food enthusiasts worldwide.
          </p>
        </motion.div>

        <div className="space-y-8">
          <AnimatePresence>
            {pollOptions.map((option) => {
              const percentage = getVotePercentage(option.votes);
              const isHovered = hoveredOption === option.id;
              
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredOption(option.id)}
                  onMouseLeave={() => setHoveredOption(null)}
                >
                  <button
                    onClick={() => handleVote(option.id)}
                    disabled={!!votedFor}
                    className={`w-full group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                      !votedFor && 'hover:shadow-2xl hover:-translate-y-1'
                    }`}
                  >
                    <div className={`bg-white p-8 relative z-10 ${
                      votedFor === option.id ? 'ring-2 ring-[#F782B4]' : ''
                    }`}>
                      <div className="flex items-center gap-6 mb-4">
                        <motion.div
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                            rotate: isHovered ? 10 : 0
                          }}
                          className="text-[#F782B4]"
                        >
                          {option.icon}
                        </motion.div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {option.title}
                          </h3>
                          <p className="text-gray-600">
                            {option.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <motion.span
                            key={percentage}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="block text-3xl font-bold bg-gradient-to-r from-[#F782B4] to-[#001B3A] bg-clip-text text-transparent"
                          >
                            {percentage}%
                          </motion.span>
                          <p className="text-sm text-gray-500">
                            {option.votes} votes
                          </p>
                        </div>
                      </div>

                      {/* Progress bar background */}
                      <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-[#F782B4] to-[#001B3A]"
                        />
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {votedFor && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600">
              Thank you for contributing! Your vote joins {totalVotes} others in shaping our understanding of global food preferences.
            </p>
            <div className="mt-4 flex justify-center gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.span
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="inline-block"
                >
                  🌟
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 