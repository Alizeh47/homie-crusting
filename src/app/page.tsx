import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';

// Loading components
const LoadingFull = () => <div className="min-h-screen bg-background animate-pulse" />;
const LoadingSection = () => <div className="h-96 bg-background animate-pulse" />;

// Dynamically import client components with proper type annotations
const CustomCursor = dynamic(() => import('@/components/common/CustomCursor'), {
  ssr: false,
  loading: () => null
}) as any;

const HeroSection = dynamic(() => import('@/components/home/HeroSection'), {
  loading: () => <LoadingFull />
}) as any;

const WhoWeAre = dynamic(() => import('@/components/sections/WhoWeAre'), {
  loading: () => <LoadingSection />
}) as any;

const EmotionsGrid = dynamic(() => import('@/components/sections/EmotionsGrid'), {
  loading: () => <LoadingSection />
}) as any;

const Destinations = dynamic(() => import('@/components/sections/Destinations'), {
  loading: () => <LoadingSection />
}) as any;

const FoodSection = dynamic(() => import('@/components/sections/FoodSection'), {
  loading: () => <LoadingSection />
}) as any;

const CulturalFacts = dynamic(() => import('@/components/sections/CulturalFacts'), {
  loading: () => <LoadingSection />
}) as any;

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <Header />
      <Sidebar />
      
      {/* Main Content */}
      <main className="relative transition-all duration-300 ease-in-out pt-16 lg:pt-20 lg:pl-8 pb-20">
        <div className="w-full px-2 md:px-4 max-w-[4000px] mx-auto">
          <div className="space-y-24 md:space-y-24">
            <Suspense fallback={<div className="min-h-screen bg-background animate-pulse" />}>
              <HeroSection />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
              <WhoWeAre />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
              <CulturalFacts />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
              <EmotionsGrid />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
              <Destinations />
            </Suspense>
            <Suspense fallback={<div className="h-96 bg-background animate-pulse" />}>
              <FoodSection />
            </Suspense>
          </div>
        </div>
      </main>

      {/* Mobile Navigation Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300 lg:hidden"
      />
    </div>
  );
}
