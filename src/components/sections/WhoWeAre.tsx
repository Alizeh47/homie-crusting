'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhoWeAre() {
  return (
    <section className={cn(
      'section relative min-h-[90vh]',
      'bg-[#C0AE91] flex items-center justify-center'
    )}>
      {/* Page Counter */}
      <div className="absolute top-8 right-8 font-sans text-lg text-gray-600 font-medium">
        02 - 03
      </div>

      {/* Center Illustration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <img 
            src="/illustrations/cultural-center.png" 
            alt="Cultural illustration" 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] max-w-none h-auto opacity-30"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl text-center px-4 relative z-10">
        <h2 className="font-playfair text-5xl font-bold text-[#0A2647] mb-8">
          Who We Are
        </h2>
        <div className="space-y-8 text-gray-700">
          <p className="text-2xl font-serif text-[#0A2647]">
            Cultural Exchange of Emotions and Feelings: A Universal Connection
          </p>
          <p className="text-lg leading-relaxed">
            Our organization serves as a bridge between diverse emotional landscapes across cultures. 
            We believe that while feelings like joy, sorrow, love, and nostalgia are universal, 
            their expression varies beautifully across different societies. Through our work, 
            we create spaces where these emotional interpretations can be shared, understood, 
            and celebrated.
          </p>
          <p className="text-lg leading-relaxed">
            We're not just facilitating exchanges; we're building a global tapestry of human 
            experiences, where every thread represents a unique cultural perspective on how 
            emotions shape our lives and connections.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-6 mt-16">
          <button className={cn(
            "w-12 h-12 rounded-full border-2 border-[#0A2647]",
            "flex items-center justify-center",
            "hover:bg-[#0A2647] hover:text-white",
            "transition-colors duration-300"
          )}>
            <span className="sr-only">Previous</span>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className={cn(
            "w-12 h-12 rounded-full border-2 border-[#0A2647]",
            "flex items-center justify-center",
            "hover:bg-[#0A2647] hover:text-white",
            "transition-colors duration-300"
          )}>
            <span className="sr-only">Next</span>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
} 