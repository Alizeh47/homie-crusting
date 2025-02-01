import { Metadata } from 'next';
import { FoodSection } from '@/components/sections/FoodSection';

export const metadata: Metadata = {
  title: 'Food & Cuisine - Cultural Exchange',
  description: 'Explore the emotional connections through global cuisines and cultural dishes.',
};

export default function FoodPage() {
  return (
    <main className="min-h-screen bg-background">
      <FoodSection />
    </main>
  );
} 