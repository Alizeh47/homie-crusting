'use client'

import { useState } from 'react'

interface Thread {
  id: number
  title: string
  author: string
  replies: number
  lastActive: string
  preview: string
}

const sampleThreads: Thread[] = [
  {
    id: 1,
    title: "Cultural Shock Experiences in Southeast Asia",
    author: "Travel Explorer",
    replies: 24,
    lastActive: "2h ago",
    preview: "The way people greet each other in different countries fascinates me..."
  },
  {
    id: 2,
    title: "Traditional Festivals Around the World",
    author: "Culture Enthusiast",
    replies: 18,
    lastActive: "4h ago",
    preview: "The Lantern Festival in Taiwan was an incredible experience..."
  },
  {
    id: 3,
    title: "Food Etiquette Across Cultures",
    author: "Foodie Traveler",
    replies: 32,
    lastActive: "1h ago",
    preview: "In Japan, it's considered polite to slurp your noodles..."
  }
]

export default function DiscussionThreads() {
  const [activeThread, setActiveThread] = useState<number>(1)

  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto animate-fadeIn">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Join the Conversation
          </h2>

          <div className="grid md:grid-cols-[1fr,2fr] gap-8">
            {/* Threads List */}
            <div className="space-y-4 animate-slideRight">
              {sampleThreads.map((thread) => (
                <div
                  key={thread.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-102 active:scale-98 ${
                    activeThread === thread.id
                      ? 'bg-white/90 backdrop-blur-sm shadow-lg border-l-4 border-emerald-500'
                      : 'bg-white/70 backdrop-blur-sm hover:bg-white/90 hover:shadow-md'
                  }`}
                  onClick={() => setActiveThread(thread.id)}
                >
                  <h3 className="font-semibold text-lg mb-2">{thread.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{thread.preview}</p>
                  <div className="flex items-center justify-between text-sm text-neutral-500">
                    <span>by {thread.author}</span>
                    <div className="flex items-center gap-4">
                      <span>{thread.replies} replies</span>
                      <span>{thread.lastActive}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Discussion */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 animate-slideLeft">
              <div className="border-b pb-4 mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  {sampleThreads.find(t => t.id === activeThread)?.title}
                </h3>
                <p className="text-neutral-600">
                  {sampleThreads.find(t => t.id === activeThread)?.preview}
                </p>
              </div>

              {/* Discussion Replies */}
              <div className="space-y-6">
                <div className="flex gap-4 animate-fadeIn">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 flex-shrink-0" />
                  <div className="flex-1 bg-neutral-50/80 backdrop-blur-sm rounded-lg p-4">
                    <p className="font-medium mb-1">John Doe</p>
                    <p className="text-neutral-600">This reminds me of my time in Thailand...</p>
                  </div>
                </div>
              </div>

              {/* Reply Input */}
              <div className="mt-8">
                <textarea
                  className="w-full p-4 rounded-lg border border-neutral-200 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  placeholder="Share your thoughts..."
                  rows={3}
                />
                <button className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-300">
                  Post Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 