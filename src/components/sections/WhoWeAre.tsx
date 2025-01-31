import { ChevronLeft, ChevronRight } from 'lucide-react';

export function WhoWeAre() {
  return (
    <section className="relative min-h-screen bg-[#F5F3F0] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Page Counter */}
      <div className="absolute top-8 right-8 font-sans text-lg text-gray-500 font-medium">
        02 - 03
      </div>

      {/* Left Decorative Element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-96 opacity-20">
        <div className="absolute inset-0 bg-[#B4A89B]" />
        <div className="absolute inset-0 bg-[url('/images/decorative-lines-light.svg')] bg-no-repeat bg-center" />
      </div>

      {/* Right Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-96 opacity-20">
        <div className="absolute inset-0 bg-[#617D8B]" />
        <div className="absolute inset-0 bg-[url('/images/decorative-coral.svg')] bg-no-repeat bg-center" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl font-bold text-[#0A2647] mb-8">
          Who We Are
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-xl">
            Cultural Exchange of Emotions and Feelings: A Universal Connection
          </p>
          <p className="text-lg leading-[1.6]">
            Our organization serves as a bridge between diverse emotional landscapes across cultures. 
            We believe that while feelings like joy, sorrow, love, and nostalgia are universal, 
            their expression varies beautifully across different societies. Through our work, 
            we create spaces where these emotional interpretations can be shared, understood, 
            and celebrated.
          </p>
          <p className="text-lg leading-[1.6]">
            We're not just facilitating exchanges; we're building a global tapestry of human 
            experiences, where every thread represents a unique cultural perspective on how 
            emotions shape our lives and connections.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
} 