'use client'

import { Footer } from '@/components/layout/Footer'
import HeroSection from '@/components/sections/reviews/HeroSection'
import DiscussionThreads from '@/components/sections/reviews/DiscussionThreads'
import PollsQuizzes from '@/components/sections/reviews/PollsQuizzes'

export default function ReviewsPage() {
  return (
    <div className="min-h-screen w-full relative bg-neutral-50">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url('/backgrounds/floral-pattern.png')`,
          backgroundSize: '900px',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 1.5,
          filter: 'grayscale(40%)',
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <main>
          <div className="bg-transparent">
            <HeroSection />
          </div>
          <div className="bg-transparent">
            <DiscussionThreads />
          </div>
          <div className="bg-transparent">
            <PollsQuizzes />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
} 