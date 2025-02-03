import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Main Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
            style={{
              minHeight: "100vh"
            }}
          >
            <source src="/videos/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 relative z-10 h-screen flex items-start justify-start">
          <div className="max-w-4xl text-left transform animate-fade-in">
            {/* Heading */}
            <div className="mb-8 animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
                <span className="text-[#05342b] block transform hover:scale-105 transition-transform duration-300">Emoconnect</span>
                <span className="text-[#05342b] font-serif block mt-2 transform hover:scale-105 transition-transform duration-300">cultures and traditions</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white text-lg md:text-xl mb-10 max-w-2xl leading-relaxed animate-fade-in-up backdrop-blur-sm bg-black/20 p-6 rounded-xl">
              Discover a world where cultures intertwine and traditions come alive. We are a vibrant community dedicated to celebrating global diversity, sharing ancestral wisdom, and fostering meaningful connections across borders and generations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-bounce-in">
              <Link 
                href="/donate"
                className="px-10 py-4 bg-[#05342b] text-white rounded-full font-medium hover:bg-[#05342b]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg uppercase tracking-wide"
              >
                start exploring
              </Link>
              <Link 
                href="/get-involved"
                className="px-10 py-4 bg-white text-[#05342b] border-2 border-[#05342b] rounded-full font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg uppercase tracking-wide"
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
        .text-shadow-lg {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.05); opacity: 0.8; }
          70% { transform: scale(0.9); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: slideUp 1.2s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        .animate-bounce-in {
          animation: bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

