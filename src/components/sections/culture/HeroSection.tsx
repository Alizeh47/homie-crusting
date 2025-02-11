import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/culture/hero-collage.jpg"
          alt="Cultural traditions collage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ color: '#301307' }}>
            Discover the Fascinating World of Cultural Facts
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-light mb-6 md:mb-8 leading-relaxed max-w-2xl" style={{ color: '#301307' }}>
            Dive into the rich tapestry of global cultures, where each tradition tells a unique story. 
            From the vibrant festivals of India to the serene tea ceremonies of Japan, explore how 
            different societies celebrate their heritage and express their identity. Through understanding 
            these cultural facts, we gain a deeper appreciation of the diverse world we live in.
          </p>
          <Link 
            href="/culture/facts"
            className="text-sm sm:text-base md:text-lg bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-lg hover:bg-black/90 transition-all duration-300 ml-auto block w-fit"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
} 