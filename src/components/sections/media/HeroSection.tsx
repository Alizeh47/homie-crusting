'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <Image
          src="/images/media/hero-bg.jpg"
          alt="Cultural diversity"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Decorative shapes */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-20 w-48 h-32 rounded-full border-2 border-white/30 animate-spin-slow" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-lg border-2 border-white/30 animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 opacity-9 animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Digital Voices & Cultural Stories
            </span>
            <span className="block mt-4 text-3xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Where Media Meets Emotion
            </span>
          </h1>
          
          <p className="text-base md:text-xl text-white/90 font-light mb-8 opacity-9 animate-fade-in-delay max-w-3xl mx-auto">
            Experience how modern influencers and digital media shape our cultural narratives, 
            connecting hearts and minds across borders through powerful storytelling and authentic expression.
          </p>

          <div className="flex justify-center">
            <button 
              onClick={() => router.push('/media/explore')}
              className="px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Explore Media & Influencers
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
} 