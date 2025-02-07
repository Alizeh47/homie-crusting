'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="w-full min-h-[80vh] relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-600 animate-slideDown">
            Share Your Cultural Journey
          </h1>
          
          <div className="relative mb-8 animate-slideUp">
            <p className="text-xl text-neutral-600 leading-relaxed">
              Join our community in sharing personal experiences, cultural perspectives, and travel stories. 
              Your unique journey can inspire and connect with others around the world.
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-emerald-500 rounded-full opacity-75" />
          </div>

          <div className="flex flex-wrap gap-4 justify-center animate-fadeIn">
            <button 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Share Your Experience
            </button>
            <button 
              className="border-2 border-neutral-300 hover:border-emerald-600 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Browse Stories
            </button>
          </div>
        </div>

        {/* Featured Story Preview */}
        <div className="mt-16 max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 animate-slideUp">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-neutral-200" />
            <div>
              <h3 className="font-semibold">Featured Story</h3>
              <p className="text-sm text-neutral-500">by Sarah Mitchell</p>
            </div>
          </div>
          <p className="text-neutral-700 leading-relaxed">
            "Experiencing the tea ceremony in Kyoto transformed my understanding of mindfulness and respect in Japanese culture..."
          </p>
        </div>
      </div>
    </section>
  )
} 