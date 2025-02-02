import React from 'react';
import Image from 'next/image';

const WhoWeAreSection = () => {
  return (
    <section className="relative bg-[#cdb891] py-16">
      {/* Page Counter */}
      <div className="absolute top-8 right-8">
        <span className="font-inter text-lg text-gray-600">02 - 03</span>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <div className="w-48 h-48 bg-[#B4A89B] rounded-full opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-white rounded-full" />
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <div className="w-48 h-48 bg-[#617D8B] rounded-full opacity-20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-white rounded-full transform rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-playfair text-5xl font-bold text-[#0A2647] mb-8">
          Who We Are
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            Cultural Exchange of Emotions and Feelings: A Universal Connection
          </p>
          <p>
            Our organization serves as a bridge between diverse emotional landscapes across cultures. 
            We believe that while feelings like joy, sorrow, love, and nostalgia are universal, 
            their expression varies beautifully across different societies. Through our work, 
            we create spaces where these emotional interpretations can be shared, understood, and celebrated.
          </p>
          <p>
            We're not just facilitating exchanges; we're building a global tapestry of human experiences, 
            where every thread represents a unique cultural perspective on how emotions shape our lives and connections.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <button className="w-12 h-12 rounded-full border-2 border-[#0A2647] flex items-center justify-center hover:bg-[#0A2647] hover:text-white transition-colors">
            <span className="sr-only">Previous</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-full border-2 border-[#0A2647] flex items-center justify-center hover:bg-[#0A2647] hover:text-white transition-colors">
            <span className="sr-only">Next</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection; 