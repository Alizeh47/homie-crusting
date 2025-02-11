'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

const quickLinks = [
  { 
    name: 'Explore Cuisines', 
    href: '/food/explore',
    description: 'Discover diverse culinary traditions from around the world'
  },
  { 
    name: 'Share Your Story', 
    href: '/food/share',
    description: 'Tell us about your memorable food experiences'
  },
  { 
    name: 'Vote in Our Poll', 
    href: '/food/poll',
    description: 'Participate in our weekly food culture surveys'
  },
  { 
    name: 'Featured Recipes', 
    href: '/food/recipes',
    description: 'Learn to cook authentic dishes from different cultures'
  },
];

export function ConnectWithUs() {
  const router = useRouter();
  const { toast } = useToast();

  const handleJoinCommunity = () => {
    // Show loading toast
    toast({
      title: 'Joining Community...',
      description: 'Please wait while we process your request.',
    });

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Show success toast
      toast({
        title: '🎉 Welcome to Our Community!',
        description: 'You have successfully joined our food enthusiasts community.',
      });
      // Redirect to community page
      router.push('/community');
    }, 1500);
  };

  return (
    <section className="relative py-24 overflow-hidden rounded-[3rem] mx-8 sm:mx-12 lg:mx-16">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/images/food/connect-bg.jpg')] bg-cover bg-center rounded-[3rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F782B4]/90 to-[#001B3A]/90 rounded-[3rem]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Food for Thought
            </h2>
            <blockquote className="text-xl md:text-2xl italic mb-6 text-white/90 rounded-2xl bg-white/5 p-8">
              "Food is our common ground, a universal experience that brings people together 
              and helps us understand each other's cultures and emotions."
            </blockquote>
            <p className="text-lg text-white/80">- James Beard</p>
          </motion.div>

          {/* Quick Links Section */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-[2rem] p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="grid grid-cols-1 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href={link.href}
                      className="group block bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-[#F782B4] transition-colors">
                            {link.name}
                          </h4>
                          <p className="text-sm text-white/70 mt-1">
                            {link.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-[#F782B4] transition-all transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-[2rem] p-10"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
              <p className="text-white/80 mb-6">
                Join our community of food enthusiasts and share your culinary adventures.
              </p>
              <motion.button
                onClick={handleJoinCommunity}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-[#F782B4] rounded-full font-semibold 
                         hover:bg-white/90 transition-colors shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Join Our Community
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 