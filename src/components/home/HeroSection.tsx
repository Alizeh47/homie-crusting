import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Main Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 w-full h-full"
          style={{ 
            backgroundImage: "url('/illustrations/hero2.jpg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            minHeight: "100vh"
          }}
        />
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 pt-12 pb-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#000C24]">Emoconnect</span>
              <br />
              <span className="text-[#0A2342] font-serif">cultures and traditions</span>
            </h1>

            {/* Description */}
            <p className="text-[#000C24] text-base md:text-lg mb-6 max-w-2xl mx-auto">
              Discover a world where cultures intertwine and traditions come alive. We are a vibrant community dedicated to celebrating global diversity, sharing ancestral wisdom, and fostering meaningful connections across borders and generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/donate"
                className="px-8 py-3 bg-[#0A2342] text-white rounded-full font-medium hover:bg-[#0A2342]/90 transition-colors"
              >
                start exploring
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
      </div>

      {/* Animated Banner Section */}
      <div className="relative -mt-28 mx-6 rounded-[2rem] bg-[#FFF8E7] overflow-hidden shadow-lg">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-2">
          <div 
            className="absolute inset-0 animate-float-slow"
            style={{
              backgroundImage: `url('/patterns/cultural-doodles.svg')`,
              backgroundSize: '100px auto',
              backgroundRepeat: 'repeat',
              animation: 'floatBackground 30s linear infinite'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Banner Title */}
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C5530] mb-8 text-center animate-fade-in-up font-bold relative">
              <span className="relative inline-block">
                EmoConnect: Bridging Emotions Through Cultural Exchange
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#4A7856] transform scale-x-0 animate-expand-line" />
              </span>
            </h2>

            {/* Banner Description */}
            <p className="text-[#2C5530] text-lg leading-relaxed mb-6 animate-fade-in-up animation-delay-200 first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:text-[#4A7856]">
              EmoConnect is a platform that fosters meaningful connections by linking emotions and feelings 
              with cultural exchange and diversity. In a world rich with traditions, languages, and perspectives, 
              EmoConnect encourages individuals to share their personal experiences, stories, and expressions 
              of emotion across cultures.
            </p>
            <p className="text-[#2C5530] text-lg leading-relaxed animate-fade-in-up animation-delay-400">
              By embracing diversity, it helps people develop empathy, understanding, and a deeper appreciation 
              for different ways of life. Through interactive discussions, storytelling, and artistic expression, 
              EmoConnect builds bridges between communities, allowing emotions to become a universal language 
              that unites humanity beyond borders.
            </p>
          </div>
        </div>
      </div>

      {/* Add required styles */}
      <style jsx>{`
        @keyframes floatBackground {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(-400px, -400px) rotate(10deg); }
        }
        @keyframes expandLine {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-float-slow {
          animation: floatBackground 30s linear infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-expand-line {
          animation: expandLine 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

