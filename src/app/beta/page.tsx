'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiUser, FiMail, FiGlobe, FiMessageSquare, FiSend } from 'react-icons/fi';
import { IconType } from 'react-icons';

interface FloatingIconProps {
  icon: IconType;
  className?: string;
  delay?: number;
}

const FloatingIcon = ({ icon: Icon, className = "", delay = 0 }: FloatingIconProps) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className={`absolute ${className}`}
  >
    <Icon className="text-[#1a237e]/20 w-8 h-8" />
  </motion.div>
);

interface BetaFeature {
  title: string;
  description: string;
  icon: IconType;
}

const betaFeatures: BetaFeature[] = [
  {
    title: 'Early Access',
    description: 'Be among the first to explore our cultural exchange platform.',
    icon: FiStar
  },
  {
    title: 'Shape the Future',
    description: 'Provide feedback that will influence platform development.',
    icon: FiHeart
  },
  {
    title: 'Global Community',
    description: 'Connect with other beta testers from around the world.',
    icon: FiGlobe
  }
];

export default function BetaPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    interests: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E3F2FD] via-white to-white">
      {/* Decorative Elements */}
      <FloatingIcon icon={FiStar} className="top-20 left-[10%]" />
      <FloatingIcon icon={FiHeart} className="top-40 right-[15%]" delay={1} />
      <FloatingIcon icon={FiStar} className="bottom-40 left-[20%]" delay={2} />
      <FloatingIcon icon={FiHeart} className="top-60 right-[25%]" delay={1.5} />

      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-[1430px] h-[600px] opacity-50">
        <Image
          src="/images/emotions/dancing.jpg"
          alt="Beta Testing"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">
            Join Our Beta
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            Be part of our journey in creating a platform that celebrates and connects cultures worldwide.
            Join our beta testing program and help shape the future of cultural exchange.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
        >
          {betaFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-[30px] p-8 border border-[#E3F2FD]
                       hover:shadow-xl transition-all duration-300"
            >
              <feature.icon className="w-8 h-8 text-[#1a237e] mb-4" />
              <h3 className="text-xl font-bold text-[#1a237e] mb-2">{feature.title}</h3>
              <p className="text-[#1a237e]/70">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Beta Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-sm rounded-[30px] p-8 border border-[#E3F2FD]"
          >
            <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-8 text-center">
              Request Beta Access
            </h2>
            
            {/* Name Input */}
            <div className="mb-6">
              <label className="block text-[#1a237e] font-medium mb-2">Name</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1a237e]/40" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-[#E3F2FD] bg-white/50
                           focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e]"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-[#1a237e] font-medium mb-2">Email</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#1a237e]/40" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-[#E3F2FD] bg-white/50
                           focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e]"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Reason Input */}
            <div className="mb-6">
              <label className="block text-[#1a237e] font-medium mb-2">Why do you want to join?</label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-[#1a237e]/40" />
                <textarea
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[#E3F2FD] bg-white/50
                           focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e]
                           min-h-[120px] resize-none"
                  placeholder="Tell us why you're interested in our beta program..."
                  required
                />
              </div>
            </div>

            {/* Interests Checkboxes */}
            <div className="mb-8">
              <label className="block text-[#1a237e] font-medium mb-2">Areas of Interest</label>
              <div className="space-y-2">
                {['Cultural Exchange', 'Language Learning', 'Traditional Arts', 'Global Connections'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={(e) => {
                        const newInterests = e.target.checked
                          ? [...formData.interests, interest]
                          : formData.interests.filter(i => i !== interest);
                        setFormData({ ...formData, interests: newInterests });
                      }}
                      className="form-checkbox h-5 w-5 text-[#1a237e] rounded border-[#E3F2FD]"
                    />
                    <span className="text-[#1a237e]/70">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#1a237e] text-white py-4 rounded-full font-medium
                       hover:bg-[#0d47a1] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <FiSend className="w-5 h-5" />
              Request Access
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
} 