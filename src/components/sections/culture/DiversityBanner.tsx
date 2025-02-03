'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function DiversityBanner() {
  const starVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 360],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  function Star({ className }: { className: string }) {
    return (
      <motion.div
        variants={starVariants}
        animate="animate"
        className={`absolute ${className}`}
      >
        ✧
      </motion.div>
    );
  }

  return (
    <div className="relative mt-32 py-24" style={{ background: '#301307' }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(circle at 50% 50%, #E8D5C4 5%, transparent 50%)',
          opacity: 0.1 
        }} />
        
        {/* Stars */}
        <Star className="text-2xl text-[#E8D5C4] top-8 left-[10%]" />
        <Star className="text-3xl text-[#DED0B6] top-12 left-[30%]" />
        <Star className="text-2xl text-[#C7BCA1] bottom-8 left-[20%]" />
        <Star className="text-3xl text-[#E8D5C4] top-10 right-[25%]" />
        <Star className="text-2xl text-[#DED0B6] bottom-12 right-[15%]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-12 rounded-[60px_20px] transform rotate-1"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: '#E8D5C4' }}
            >
              Embracing Cultural Diversity
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: '#DED0B6' }}
            >
              "When we take time to understand each other's cultures, we discover a tapestry of wisdom, 
              traditions, and perspectives that enrich our collective human experience. Every cultural 
              exchange opens a new window to see the world through different eyes."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center gap-4 flex-wrap"
            >
              {['Understanding', 'Respect', 'Unity', 'Growth'].map((word, index) => (
                <span
                  key={word}
                  className="inline-block px-6 py-2 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: '#E8D5C4',
                    color: '#301307',
                    transform: `rotate(${index % 2 === 0 ? '2' : '-2'}deg)`
                  }}
                >
                  {word}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute left-0 top-0 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full rounded-full opacity-50" style={{ background: 'linear-gradient(45deg, #E8D5C4 0%, transparent 60%)' }} />
      </div>
      <div className="absolute right-0 bottom-0 w-40 h-40 transform translate-x-1/2 translate-y-1/2">
        <div className="w-full h-full rounded-full opacity-50" style={{ background: 'linear-gradient(225deg, #DED0B6 0%, transparent 60%)' }} />
      </div>
    </div>
  );
} 