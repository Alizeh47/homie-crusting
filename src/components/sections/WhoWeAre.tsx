'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhoWeAre() {
  return (
    <section className={cn(
      'section relative min-h-[90vh] md:min-h-[90vh]',
      'bg-[#E4E4E1] flex items-center justify-center'
    )}>
      {/* Page Counter */}
      <div className="absolute top-4 md:top-8 right-4 md:right-8 font-sans text-sm md:text-lg text-gray-600 font-medium">
        02 - 03
      </div>

      {/* Center Illustration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <img 
            src="/illustrations/cultural-center.png" 
            alt="Cultural illustration" 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[150%] md:w-[1000px] max-w-none h-auto opacity-20 md:opacity-30"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl text-center px-4 relative z-10">
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A2647] mb-4 md:mb-8">
          Who We Are
        </h2>
        <div className="space-y-4 md:space-y-8 text-gray-700">
          <p className="text-xl sm:text-2xl md:text-2xl font-serif text-[#0A2647]">
            Cultural Exchange of Emotions and Feelings: A Universal Connection
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed px-2 md:px-0">
            Our organization serves as a bridge between diverse emotional landscapes across cultures. 
            We believe that while feelings like joy, sorrow, love, and nostalgia are universal, 
            their expression varies beautifully across different societies. Through our work, 
            we create spaces where these emotional interpretations can be shared, understood, 
            and celebrated.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed px-2 md:px-0">
            We're not just facilitating exchanges; we're building a global tapestry of human 
            experiences, where every thread represents a unique cultural perspective on how 
            emotions shape our lives and connections.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 md:space-x-6 mt-8 md:mt-16">
          <button className={cn(
            "w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A2647]",
            "flex items-center justify-center",
            "hover:bg-[#0A2647] hover:text-white",
            "transition-colors duration-300"
          )}>
            <span className="sr-only">Previous</span>
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className={cn(
            "w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#0A2647]",
            "flex items-center justify-center",
            "hover:bg-[#0A2647] hover:text-white",
            "transition-colors duration-300"
          )}>
            <span className="sr-only">Next</span>
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre; 