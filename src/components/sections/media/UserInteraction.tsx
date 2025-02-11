'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const mockSubmissions = [
  {
    id: 1,
    user: 'Sarah Chen',
    avatar: '/images/media/sarah.jpg',
    culture: 'Chinese',
    content: 'In my culture, we express gratitude through subtle gestures and careful attention to others needs.',
    media: '/images/media/joy-brazil.jpg',
    likes: 245,
  },
  {
    id: 2,
    user: 'Marco Rossi',
    avatar: '/images/media/marco.jpg',
    culture: 'Italian',
    content: 'Hand gestures are our second language - they add emotion and emphasis to every conversation!',
    media: '/images/media/dance.jpg',
    likes: 189,
  },
  // Add more mock submissions...
];

export default function UserInteraction() {
  const [activeSubmission, setActiveSubmission] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-left mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            How Do You Express Your Emotions?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Share your unique cultural perspective on emotional expression with our global community.
          </p>
        </div>

        {/* Form and Illustration Container */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 mb-20">
          {/* Mobile-only Illustration */}
          <div className="block lg:hidden w-full relative min-h-[300px] flex items-center justify-center">
            <div className="relative w-full h-[200%]">
              <Image
                src="/images/media/batikkk.png"
                alt="Share your cultural story"
                fill
                className="object-contain scale-90"
                priority
              />
            </div>
            {/* Mobile-only Decorative elements */}
            <div className="absolute inset-0 pointer-events-none scale-100">
              <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-purple-100 rounded-full opacity-50" />
              <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-pink-100 rounded-full opacity-50" />
              <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-yellow-100 rounded-full opacity-50" />
            </div>
          </div>

          {/* Submission Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Share Your Story</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Culture
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Japanese, Brazilian, etc."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Story
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={4}
                    placeholder="Share how emotions are expressed in your culture..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Add Media (Optional)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500">
                          <span>Upload a file</span>
                          <input type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Share Your Story
                </button>
              </form>
            </div>
          </div>

          {/* Desktop-only Illustration */}
          <div className="hidden lg:flex lg:w-1/2 relative lg:min-h-[100px] items-center justify-center lg:-mt-20">
            <div className="relative lg:w-[200%] h-[200%] lg:-mr-[10%] lg:-mt-[20%]">
              <Image
                src="/images/media/batikkk.png"
                alt="Share your cultural story"
                fill
                className="object-contain lg:scale-100"
                priority
              />
            </div>
            {/* Desktop-only Decorative elements */}
            <div className="absolute inset-0 pointer-events-none lg:scale-150">
              <div className="absolute top-1/4 right-1/4 lg:w-28 lg:h-28 bg-purple-100 rounded-full opacity-50" />
              <div className="absolute bottom-1/3 left-1/3 lg:w-44 lg:h-44 bg-pink-100 rounded-full opacity-50" />
              <div className="absolute top-1/2 right-1/3 lg:w-24 lg:h-24 bg-yellow-100 rounded-full opacity-50" />
            </div>
          </div>
        </div>

        {/* User Submissions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSubmissions.map((submission) => (
            <div
              key={submission.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={submission.media}
                  alt={`Submission by ${submission.user}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={submission.avatar}
                      alt={submission.user}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="font-bold">{submission.user}</h4>
                    <p className="text-sm text-gray-600">{submission.culture} Culture</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{submission.content}</p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                    <svg
                      className="w-5 h-5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    {submission.likes}
                  </button>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 