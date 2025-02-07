'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { EmotionsGrid } from '@/components/sections/EmotionsGrid';
import { DestinationsSection } from '@/components/sections/Destinations';
import { FoodSection } from '@/components/sections/FoodSection';
import { CulturalFacts } from '@/components/sections/CulturalFacts';
import { CustomCursor } from '@/components/common/CustomCursor';
import { cn } from '@/lib/utils';
import { HeroSection } from '@/components/home/HeroSection';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Header />
      <Sidebar />
      
      {/* Main Content */}
      <main className={cn(
        'relative',
        'transition-all duration-300 ease-in-out',
        'pt-16 lg:pt-20', // Reduced top padding
        'lg:pl-8', // Reduced sidebar spacing
        'pb-20' // Bottom padding
      )}>
        <div className="w-full px-2 md:px-4 max-w-[4000px] mx-auto">
          <div className="space-y-24 md:space-y-24">
            <HeroSection />
            <WhoWeAre />
            <CulturalFacts />
            <EmotionsGrid />
            <DestinationsSection />
            <FoodSection />
          </div>
        </div>
      </main>

      {/* Mobile Navigation Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/20 z-30",
          "transition-opacity duration-300",
          "lg:hidden"
        )} 
      />
    </div>
  );
}
