import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <img
          src="/images/hero-bg.jpg"
          alt="Cultural diversity"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Bridging Cultures,{' '}
            <span className="text-primary-400">Sharing Emotions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Explore the beautiful diversity of emotional expression across cultures.
            Join us in discovering how different societies experience and communicate
            universal human feelings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={{ pathname: '/destinations' }}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 transition-colors"
            >
              Explore Cultures
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href={{ pathname: '/register' }}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
} 