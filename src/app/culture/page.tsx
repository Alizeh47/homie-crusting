import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/culture/HeroSection';
import StrangeTraditions from '@/components/sections/culture/StrangeTraditions';
import LesserKnownFacts from '@/components/sections/culture/LesserKnownFacts';
import EmotionalExpressions from '@/components/sections/culture/EmotionalExpressions';
import CustomsEtiquettes from '@/components/sections/culture/CustomsEtiquettes';
import DiversityBanner from '@/components/sections/culture/DiversityBanner';

export const metadata: Metadata = {
  title: 'Cultural Exchange of Emotions and Feelings | Cultural Facts',
  description: 'Explore the fascinating world of cultural emotions, traditions, and etiquettes. Discover how different cultures express emotions and celebrate their unique customs.',
  keywords: 'cultural exchange, emotions, traditions, customs, etiquette, global culture',
};

export default function CulturePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StrangeTraditions />
      <LesserKnownFacts />
      <EmotionalExpressions />
      <DiversityBanner />
      <CustomsEtiquettes />
    </main>
  );
} 