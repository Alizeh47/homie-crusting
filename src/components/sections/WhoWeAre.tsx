'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhoWeAre() {
  return (
    <section className={cn(
      'section relative min-h-[90vh]',
      'bg-cream-100 flex items-center justify-center'
    )}>
      {/* Page Counter */}
      <div className="absolute top-8 right-8 font-sans text-lg text-gray-500 font-medium">
        02 - 03
      </div>

      {/* Left Decorative Element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-96 opacity-20">
        <div className="absolute inset-0 bg-secondary-300" />
        <div className="absolute inset-0 bg-[url('/images/decorative-lines-light.svg')] bg-no-repeat bg-center" />
      </div>

      {/* Right Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-96 opacity-20">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('/images/decorative-coral.svg')] bg-no-repeat bg-center" />
      </div>

      {/* Main Content */}
      <div className="container max-w-4xl text-center">
        <h2 className="section-title mb-8">
          Who We Are
        </h2>
        <div className="space-y-8 text-gray-700">
          <p className="text-2xl font-serif text-primary">
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
            "btn w-12 h-12 rounded-full bg-white shadow-lg",
            "hover:bg-cream-50 hover:shadow-xl",
            "transition-all duration-300"
          )}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className={cn(
            "btn w-12 h-12 rounded-full bg-white shadow-lg",
            "hover:bg-cream-50 hover:shadow-xl",
            "transition-all duration-300"
          )}>
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
} 