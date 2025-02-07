'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiShield, FiCheck, FiAlertCircle } from 'react-icons/fi';
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

interface Section {
  title: string;
  content: string[];
  icon: IconType;
}

const sections: Section[] = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing and using our platform, you agree to be bound by these Terms of Service.',
      'We reserve the right to modify these terms at any time, with notice to users.',
      'Continued use of the platform constitutes acceptance of modified terms.'
    ],
    icon: FiCheck
  },
  {
    title: 'User Responsibilities',
    content: [
      'Users must provide accurate and complete information when using our services.',
      'Users are responsible for maintaining the confidentiality of their account.',
      'Any activity that occurs under your account is your responsibility.'
    ],
    icon: FiShield
  },
  {
    title: 'Content Guidelines',
    content: [
      'Users must respect cultural sensitivities when posting content.',
      'Content must not violate any applicable laws or regulations.',
      'We reserve the right to remove content that violates our guidelines.'
    ],
    icon: FiAlertCircle
  },
  {
    title: 'Intellectual Property',
    content: [
      'All content on the platform is protected by copyright and other intellectual property laws.',
      'Users retain ownership of their original content.',
      'By posting content, you grant us a license to use it on our platform.'
    ],
    icon: FiStar
  },
  {
    title: 'Privacy & Data',
    content: [
      'We collect and process data as outlined in our Privacy Policy.',
      'Users have control over their personal data and privacy settings.',
      'We implement security measures to protect user data.'
    ],
    icon: FiHeart
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E3F2FD] via-white to-white">
      {/* Decorative Elements */}
      <FloatingIcon icon={FiStar} className="top-20 left-[10%]" />
      <FloatingIcon icon={FiHeart} className="top-40 right-[15%]" delay={1} />
      <FloatingIcon icon={FiStar} className="bottom-40 left-[20%]" delay={2} />
      <FloatingIcon icon={FiHeart} className="top-60 right-[25%]" delay={1.5} />

      {/* Hero Image */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10">
        <Image
          src="/images/emotions/pattern.png"
          alt="Decorative pattern"
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
            Terms of Service
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our platform. These terms outline your rights,
            obligations, and our commitment to providing a safe and respectful cultural experience.
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

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
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
            <h3 className="text-xl font-bold text-[#1a237e] mb-4">Questions About Our Terms?</h3>
            <p className="text-[#1a237e]/70 mb-4">
              If you have any questions about these terms, please contact us at:
            </p>
            <a
              href="mailto:legal@culturalapp.com"
              className="text-[#1a237e] font-medium hover:text-[#0d47a1] transition-colors"
            >
              legal@culturalapp.com
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 