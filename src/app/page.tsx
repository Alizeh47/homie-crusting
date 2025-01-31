'use client';

import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { WhoWeAre } from '@/components/sections/WhoWeAre';
import { EmotionsGrid } from '@/components/sections/EmotionsGrid';
import { DestinationsSection } from '@/components/sections/Destinations';
import { FoodSection } from '@/components/sections/FoodSection';
import { CulturalFacts } from '@/components/sections/CulturalFacts';
import { CustomCursor } from '@/components/common/CustomCursor';
import { cn } from '@/lib/utils';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <CustomCursor />
      <Header />
      <Sidebar />
      
      {/* Main Content */}
      <div className={cn(
        'transition-all duration-300 ease-in-out',
        'pt-20', // Header height
        'lg:pl-[280px]', // Sidebar width on large screens
        'px-4 sm:px-6 lg:px-8', // Horizontal padding
        'pb-20' // Bottom padding
      )}>
        <div className="max-w-7xl mx-auto">
          <WhoWeAre />
          <CulturalFacts />
          <EmotionsGrid />
          <DestinationsSection />
          <FoodSection />
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className="lg:hidden">
        <div className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300" />
      </div>
    </main>
  );
}
