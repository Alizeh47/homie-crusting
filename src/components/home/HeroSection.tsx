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
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-600">Empowering</span>
            <br />
            <span className="text-[#0A2342] font-serif">Emerging Artists</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            We are not just an organization; we are a community of passionate 
            individuals committed to nurturing the next generation of visionary 
            artists who push the boundaries of creativity.
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

        {/* Partners Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-6">
            Donated by more than 120+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Replace these with your actual partner logos */}
            <img src="/logos/indeed.svg" alt="Indeed" className="h-8" />
            <img src="/logos/skyone.svg" alt="Sky One" className="h-8" />
            <img src="/logos/isowool.svg" alt="Isowool" className="h-8" />
            <img src="/logos/optimus.svg" alt="Optimus" className="h-8" />
            <img src="/logos/laserlite.svg" alt="Laserlite" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
} 