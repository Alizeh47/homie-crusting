'use client';

import dynamic from 'next/dynamic';
import LoadingState from '@/components/sections/language/LoadingState';

// Dynamically import components with SSR disabled for framer-motion components
const HeroSection = dynamic(() => import('@/components/sections/language/HeroSection'), { 
  ssr: false,
  loading: () => <LoadingState />
});
const WordExploration = dynamic(() => import('@/components/sections/language/WordExploration'), { 
  ssr: false,
  loading: () => <LoadingState />
});
const BeautifulPhrases = dynamic(() => import('@/components/sections/language/BeautifulPhrases'), { 
  ssr: false,
  loading: () => <LoadingState />
});
const LearnPhrase = dynamic(() => import('@/components/sections/language/LearnPhrase'), { 
  ssr: false,
  loading: () => <LoadingState />
});
const UserSubmissions = dynamic(() => import('@/components/sections/language/UserSubmissions'), { 
  ssr: false,
  loading: () => <LoadingState />
});

export default function LanguagePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WordExploration />
      <BeautifulPhrases />
      <LearnPhrase />
      <UserSubmissions />
    </main>
  );
} 