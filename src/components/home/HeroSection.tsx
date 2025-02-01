import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[600px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/illustrations/hero-bg.jpg')" }}
      />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center mt-24">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#000C24]">Emoconnect</span>
            <br />
            <span className="text-[#0A2342] font-serif">cultures and traditions</span>
          </h1>

          {/* Description */}
          <p className="text-[#000C24] text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Discover a world where cultures intertwine and traditions come alive. We are a vibrant community dedicated to celebrating global diversity, sharing ancestral wisdom, and fostering meaningful connections across borders and generations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate"
              className="px-8 py-3 bg-[#0A2342] text-white rounded-full font-medium hover:bg-[#0A2342]/90 transition-colors"
            >
              Donate
            </Link>
            <Link 
              href="/get-involved"
              className="px-8 py-3 bg-white text-[#0A2342] border-2 border-[#0A2342] rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

