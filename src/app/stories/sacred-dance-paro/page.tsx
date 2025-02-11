'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function SacredDanceParoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-[#E3F2FD]/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/stories/dance.jpg"
            alt="Sacred Dance of Paro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif font-bold text-center mb-6"
          >
            The Sacred Dance of Paro
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-center max-w-2xl"
          >
            A spiritual journey through Bhutan's ancient traditions
          </motion.p>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Story Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="text-blue-600 font-semibold uppercase tracking-wider mb-2">Bhutan</p>
            <p className="text-gray-600">Spring Festival</p>
          </motion.div>

          {/* Main Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg mx-auto"
          >
            <p>
              In the mystical kingdom of Bhutan, where ancient traditions thrive amidst pristine Himalayan landscapes, 
              the Paro Tsechu festival stands as a testament to the nation's rich cultural heritage. During this 
              sacred celebration, masked dancers transform the ancient courtyards into stages where centuries-old 
              stories come alive through movement and music.
            </p>

            <div className="my-12 relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/stories/dance_moves.jpg"
                alt="Masked dancers performing at Paro Tsechu"
                fill
                className="object-cover"
              />
            </div>

            <h2>The Spiritual Significance</h2>
            <p>
              Each movement in the sacred dances carries profound spiritual meaning, passed down through generations 
              of Buddhist practitioners. The dancers, adorned in intricate masks and vibrant costumes, become living 
              vessels of ancient wisdom, their performances serving as moving meditations that bless both participants 
              and spectators alike.
            </p>

            <h2>A Living Tradition</h2>
            <p>
              What makes the Paro Tsechu truly remarkable is not just its spectacular display, but the deep devotion 
              with which the Bhutanese people preserve and celebrate these traditions. Young monks spend years 
              perfecting the precise movements, ensuring that each gesture maintains its sacred significance.
            </p>

            <div className="my-12 relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/stories/dance-crowd.jpg"
                alt="Local people gathering at the festival"
                fill
                className="object-cover"
              />
            </div>

            <h2>Community Connection</h2>
            <p>
              The festival serves as a powerful reminder of how cultural traditions can unite communities and create 
              spaces for shared spiritual experience. Local families gather in their finest traditional attire, 
              sharing stories and blessings, while visitors from around the world find themselves drawn into this 
              tapestry of devotion and celebration.
            </p>

            <h2>Preserving Ancient Wisdom</h2>
            <p>
              In an era of rapid global change, the Sacred Dance of Paro stands as a living bridge between past and 
              present. It demonstrates how ancient wisdom can remain relevant and vital, continuing to inspire and 
              transform those who witness it. The dedication to preserving these traditions ensures that future 
              generations will continue to experience the profound spiritual impact of these sacred dances.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-between items-center"
          >
            <Link href="/travel">
              <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                Back to Stories
              </button>
            </Link>
            <Link href="/stories/tea-ceremony-wisdom">
              <button className="px-6 py-2 bg-[#1a237e] text-white rounded-full hover:bg-[#1a237e]/90 transition-colors">
                Next Story
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 