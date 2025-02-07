'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiShield, FiAlertCircle, FiCheckCircle, FiPhone, FiMail, FiInfo } from 'react-icons/fi';
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

interface SafetyTip {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  category: string;
}

interface EmergencyContact {
  id: string;
  title: string;
  contact: string;
  icon: IconType;
  description: string;
}

const safetyTips: SafetyTip[] = [
  {
    id: '1',
    title: 'Cultural Sensitivity',
    description: 'Be mindful of local customs and traditions. Research and respect cultural norms before participating in activities.',
    icon: FiHeart,
    category: 'General'
  },
  {
    id: '2',
    title: 'Emergency Preparedness',
    description: 'Keep emergency contacts readily available and know the location of nearest medical facilities.',
    icon: FiAlertCircle,
    category: 'Emergency'
  },
  {
    id: '3',
    title: 'Safe Participation',
    description: 'Follow all safety guidelines provided by cultural event organizers and local authorities.',
    icon: FiCheckCircle,
    category: 'Events'
  },
  {
    id: '4',
    title: 'Health Considerations',
    description: 'Be aware of any health requirements or recommendations for participating in cultural activities.',
    icon: FiShield,
    category: 'Health'
  },
  {
    id: '5',
    title: 'Dietary Safety',
    description: 'Research food ingredients and communicate any allergies when exploring cultural cuisines.',
    icon: FiShield,
    category: 'Health'
  },
  {
    id: '6',
    title: 'Weather Preparation',
    description: 'Check weather conditions and dress appropriately for outdoor cultural events.',
    icon: FiShield,
    category: 'Events'
  },
  {
    id: '7',
    title: 'Communication Plan',
    description: 'Establish clear communication channels with event organizers and emergency contacts.',
    icon: FiAlertCircle,
    category: 'Emergency'
  },
  {
    id: '8',
    title: 'Respectful Photography',
    description: 'Always ask permission before taking photos at cultural sites or during ceremonies.',
    icon: FiHeart,
    category: 'General'
  },
  {
    id: '9',
    title: 'Sacred Site Etiquette',
    description: 'Follow specific guidelines and dress codes when visiting religious or sacred cultural sites.',
    icon: FiHeart,
    category: 'General'
  },
  {
    id: '10',
    title: 'Group Safety',
    description: 'Stay with your group and follow guide instructions during cultural tours and events.',
    icon: FiCheckCircle,
    category: 'Events'
  },
  {
    id: '11',
    title: 'Medical Information',
    description: 'Carry important medical information and necessary medications when attending cultural events.',
    icon: FiShield,
    category: 'Health'
  },
  {
    id: '12',
    title: 'Emergency Exits',
    description: 'Familiarize yourself with emergency exits and evacuation procedures at cultural venues.',
    icon: FiAlertCircle,
    category: 'Emergency'
  }
];

const emergencyContacts: EmergencyContact[] = [
  {
    id: '1',
    title: 'Emergency Hotline',
    contact: '1-800-CULTURE',
    icon: FiPhone,
    description: '24/7 support for immediate assistance'
  },
  {
    id: '2',
    title: 'Safety Email',
    contact: 'safety@culturalapp.com',
    icon: FiMail,
    description: 'For non-emergency safety inquiries'
  }
];

export default function HealthSafetyPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'General', 'Emergency', 'Events', 'Health'];
  
  const filteredTips = selectedCategory === 'All' 
    ? safetyTips 
    : safetyTips.filter(tip => tip.category === selectedCategory);

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
          src="/images/health-safety/pattern.png"
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
            Health & Safety
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            Your safety is our priority. Learn about our comprehensive health and safety guidelines 
            to ensure a secure cultural experience.
          </p>
        </motion.div>

        {/* Emergency Contacts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {emergencyContacts.map((contact, index) => (
            <div
              key={contact.id}
              className="bg-white/80 backdrop-blur-sm rounded-[30px] p-6 border border-[#E3F2FD]
                       hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center">
                  <contact.icon className="w-6 h-6 text-[#1a237e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a237e]">{contact.title}</h3>
                  <p className="text-[#1a237e]/70">{contact.description}</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-lg font-medium text-[#1a237e]">{contact.contact}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Add Safety Guide Section before Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 bg-white/80 backdrop-blur-sm rounded-[30px] p-8 border border-[#E3F2FD]">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-4">Safety First Approach</h2>
              <div className="space-y-4 text-[#1a237e]/70">
                <p className="mb-4">Our commitment to your safety includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Regular safety audits of cultural events</li>
                  <li>Verified event organizers and venues</li>
                  <li>Clear emergency protocols</li>
                  <li>Trained safety personnel on-site</li>
                  <li>Comprehensive insurance coverage</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-4">Before You Participate</h2>
              <div className="space-y-4 text-[#1a237e]/70">
                <p className="mb-4">Essential preparation steps:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Research the cultural activity</li>
                  <li>Check health requirements</li>
                  <li>Review safety guidelines</li>
                  <li>Prepare necessary documents</li>
                  <li>Plan your transportation</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Add Quick Access Safety Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-white/80 rounded-2xl border border-[#E3F2FD] hover:shadow-lg transition-all duration-300">
              <FiShield className="w-6 h-6 text-[#1a237e] mx-auto mb-2" />
              <span className="text-sm text-[#1a237e] font-medium">Safety Guide</span>
            </button>
            <button className="p-4 bg-white/80 rounded-2xl border border-[#E3F2FD] hover:shadow-lg transition-all duration-300">
              <FiAlertCircle className="w-6 h-6 text-[#1a237e] mx-auto mb-2" />
              <span className="text-sm text-[#1a237e] font-medium">Emergency Info</span>
            </button>
            <button className="p-4 bg-white/80 rounded-2xl border border-[#E3F2FD] hover:shadow-lg transition-all duration-300">
              <FiPhone className="w-6 h-6 text-[#1a237e] mx-auto mb-2" />
              <span className="text-sm text-[#1a237e] font-medium">Contact Us</span>
            </button>
            <button className="p-4 bg-white/80 rounded-2xl border border-[#E3F2FD] hover:shadow-lg transition-all duration-300">
              <FiInfo className="w-6 h-6 text-[#1a237e] mx-auto mb-2" />
              <span className="text-sm text-[#1a237e] font-medium">FAQs</span>
            </button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                        ${selectedCategory === category 
                          ? 'bg-[#1a237e] text-white' 
                          : 'bg-[#E3F2FD]/50 text-[#1a237e]/70 hover:bg-[#E3F2FD]'
                        }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Safety Tips Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredTips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-[30px] p-8 border border-[#E3F2FD]
                       hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-6 h-6 text-[#1a237e]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a237e] mb-2">{tip.title}</h3>
                  <p className="text-[#1a237e]/70">{tip.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#E3F2FD]/50 px-6 py-3 rounded-full">
            <FiInfo className="text-[#1a237e]" />
            <span className="text-[#1a237e] font-medium">
              For detailed safety protocols, please refer to our comprehensive safety guide
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 