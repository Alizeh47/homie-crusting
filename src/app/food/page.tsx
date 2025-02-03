import { Metadata } from 'next';
import { FoodHeroSection } from '@/components/sections/food/HeroSection';
import { IconicDishes } from '@/components/sections/food/IconicDishes';
import { StreetVsFine } from '@/components/sections/food/StreetVsFine';
import { DiyRecipes } from '@/components/sections/food/DiyRecipes';
import { FoodEmotions } from '@/components/sections/food/FoodEmotions';
import { CuisinePoll } from '@/components/sections/food/CuisinePoll';
import { ConnectWithUs } from '@/components/sections/food/ConnectWithUs';

export const metadata: Metadata = {
  title: 'Food & Cuisine - Cultural Exchange',
  description: 'Explore the emotional connections through global cuisines and cultural dishes.',
};

export default function FoodPage() {
  return (
    <main className="min-h-screen">
      <FoodHeroSection />
      <IconicDishes />
      <StreetVsFine />
      <DiyRecipes />
      <FoodEmotions />
      <CuisinePoll />
      <ConnectWithUs />
    </main>
  );
} 