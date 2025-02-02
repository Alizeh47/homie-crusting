'use client';

import React from 'react';
import HeroSection from '@/components/sections/travel/HeroSection';
import IntroductionSection from '@/components/sections/travel/IntroductionSection';
import DestinationCategories from '@/components/sections/travel/DestinationCategories';
import DestinationGuides from '@/components/sections/travel/DestinationGuides';
import UserReviews from '@/components/sections/travel/UserReviews';
import InteractiveMap from '@/components/sections/travel/InteractiveMap';
import CulturalStories from '@/components/sections/travel/CulturalStories';

export default function TravelPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroductionSection />
      <DestinationCategories />
      <DestinationGuides />
      <UserReviews />
      <InteractiveMap />
      <CulturalStories />
    </main>
  );
} 