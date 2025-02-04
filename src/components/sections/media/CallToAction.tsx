'use client';

import React from 'react';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-32 overflow-hidden rounded-t-[3rem]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl" />
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/20 rounded-full animate-spin-slow" />
        <div className="absolute top-1/4 right-1/4 w-12 h-12 border border-white/20 rounded-lg animate-bounce-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 border border-white/20 rounded-full animate-pulse" />
      </div>

      <div className="relative container mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif font-bold text-white mb-8">
          Join Our Global Community
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
          Experience the beauty of cultural emotions and be part of a worldwide movement
          celebrating diversity in emotional expression.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="px-8 py-4 bg-white text-purple-900 rounded-full font-medium hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Subscribe Now
          </button>
          <button className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-full font-medium backdrop-blur-sm hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
            Follow Us
          </button>
        </div>

        {/* Social proof with enhanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="text-4xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/60">Active Members</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-white/60">Cultures Represented</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-white/60">Stories Shared</div>
          </div>
        </div>

        {/* Social media icons with enhanced spacing */}
        <div className="flex justify-center gap-6 pt-8 border-t border-white/10 mt-16">
          {['twitter', 'facebook', 'instagram', 'youtube'].map((platform) => (
            <a
              key={platform}
              href="#"
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
            >
              <span className="sr-only">{platform}</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                {/* Add appropriate SVG paths for each social media icon */}
                <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 