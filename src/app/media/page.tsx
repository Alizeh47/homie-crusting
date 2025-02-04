'use client';

import React from 'react';
import HeroSection from '@/components/sections/media/HeroSection';
import EmotionalExpressions from '@/components/sections/media/EmotionalExpressions';
import PopularMedia from '@/components/sections/media/PopularMedia';
import UserInteraction from '@/components/sections/media/UserInteraction';
import CallToAction from '@/components/sections/media/CallToAction';
import Image from 'next/image';

const BookTokCard = ({ title, image, description }: { title: string; image: string; description: string }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-[3rem] transform group-hover:scale-105 transition-all duration-500" />
    <div className="relative bg-white backdrop-blur-lg rounded-[3rem] overflow-hidden border border-gray-100 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
      <div className="aspect-[4/5] relative rounded-b-[8rem]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-8 relative z-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <button className="mt-4 px-8 py-3 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-full text-purple-700 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
          Explore More
        </button>
      </div>
    </div>
  </div>
);

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <HeroSection />
      <EmotionalExpressions />
      <PopularMedia />
      <UserInteraction />
      
      {/* BookTok Community Section */}
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/media/dots.png')] opacity-30 animate-float" />
          <div className="absolute inset-0 bg-[url('/images/media/dots.png')] opacity-20 animate-float-slow" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">
              BookTok Community
              <span className="block text-2xl font-normal text-gray-500 mt-4">
                Discover Your Next Literary Adventure
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <BookTokCard
              title="The Midnight Library"
              image="/images/media/book1.jpg"
              description="Between life and death there is a library. Would you make a different choice?"
            />
            <BookTokCard
              title="A Court of Thorns and Roses"
              image="/images/media/book2.jpg"
              description="Enter a world of magic, romance, and dangerous bargains."
            />
            <BookTokCard
              title="The Seven Husbands"
              image="/images/media/book3.jpg"
              description="The epic journey of a legendary Hollywood actress."
            />
          </div>
        </div>
      </section>

      <CallToAction />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </main>
  );
} 