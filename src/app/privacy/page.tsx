'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiShield, FiLock, FiDatabase, FiUsers, FiGlobe } from 'react-icons/fi';
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

interface PrivacySection {
  title: string;
  content: string[];
  icon: IconType;
}

const privacySections: PrivacySection[] = [
  {
    title: 'Data Collection',
    content: [
      'We collect information you provide directly to us when using our services.',
      'Automatically collected data includes usage statistics and device information.',
      'We use cookies and similar technologies to enhance your experience.'
    ],
    icon: FiDatabase
  },
  {
    title: 'Data Usage',
    content: [
      'Your data is used to provide and improve our cultural exploration services.',
      'We analyze usage patterns to enhance user experience and content recommendations.',
      'Personal information is never sold to third parties.'
    ],
    icon: FiUsers
  },
  {
    title: 'Data Protection',
    content: [
      'We implement industry-standard security measures to protect your data.',
      'Access to personal information is strictly controlled and monitored.',
      'Regular security audits ensure the safety of your information.'
    ],
    icon: FiLock
  },
  {
    title: 'International Data Transfer',
    content: [
      'Your data may be processed in countries other than your own.',
      'We ensure appropriate safeguards are in place for international transfers.',
      'All transfers comply with applicable data protection laws.'
    ],
    icon: FiGlobe
  },
  {
    title: 'Your Rights',
    content: [
      'You have the right to access, correct, or delete your personal data.',
      'You can opt-out of non-essential data collection and processing.',
      'Contact us to exercise your data protection rights.'
    ],
    icon: FiShield
  }
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E3F2FD] via-white to-white">
      {/* Decorative Elements */}
      <FloatingIcon icon={FiStar} className="top-20 left-[10%]" />
      <FloatingIcon icon={FiHeart} className="top-40 right-[15%]" delay={1} />
      <FloatingIcon icon={FiStar} className="bottom-40 left-[20%]" delay={2} />
      <FloatingIcon icon={FiHeart} className="top-60 right-[25%]" delay={1.5} />

      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-[1400px] h-[500px] opacity-40">
        <Image
          src="/images/culture/french-letters.jpg"
          alt="Privacy and Trust"
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
            Privacy Policy
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            We are committed to protecting your privacy and ensuring the security of your personal information.
            This policy explains how we collect, use, and protect your data.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#E3F2FD] text-[#1a237e]/70">
            Last Updated: {new Date().toLocaleDateString()}
          </span>
        </motion.div>

        {/* Privacy Sections */}
        <div className="max-w-4xl mx-auto">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-[#1a237e]" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#1a237e]">{section.title}</h2>
              </div>
              <div className="pl-16 space-y-4">
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-[#1a237e]/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-[30px] p-8 border border-[#E3F2FD]">
            <h3 className="text-xl font-bold text-[#1a237e] mb-4">Privacy Concerns?</h3>
            <p className="text-[#1a237e]/70 mb-4">
              If you have any questions about our privacy practices, please contact our Data Protection Officer at:
            </p>
            <a
              href="mailto:privacy@culturalapp.com"
              className="text-[#1a237e] font-medium hover:text-[#0d47a1] transition-colors"
            >
              privacy@culturalapp.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 