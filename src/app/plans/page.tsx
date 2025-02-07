'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiCheck, FiAward, FiGift, FiZap } from 'react-icons/fi';
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

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  icon: IconType;
  price: string;
  description: string;
  features: PlanFeature[];
  highlight?: boolean;
  cta: string;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    icon: FiHeart,
    price: '$9.99',
    description: 'Perfect for individuals starting their cultural journey',
    features: [
      { name: 'Access to basic cultural content', included: true },
      { name: 'Limited emotion exploration', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Email support', included: true },
      { name: 'Advanced cultural insights', included: false },
      { name: 'Personalized recommendations', included: false }
    ],
    cta: 'Get Started'
  },
  {
    id: 'pro',
    name: 'Professional',
    icon: FiAward,
    price: '$19.99',
    description: 'Ideal for enthusiasts seeking deeper cultural understanding',
    features: [
      { name: 'Access to basic cultural content', included: true },
      { name: 'Unlimited emotion exploration', included: true },
      { name: 'Community forum access', included: true },
      { name: 'Priority email support', included: true },
      { name: 'Advanced cultural insights', included: true },
      { name: 'Personalized recommendations', included: true }
    ],
    highlight: true,
    cta: 'Go Pro'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: FiGift,
    price: 'Custom',
    description: 'For organizations fostering cultural awareness at scale',
    features: [
      { name: 'Access to basic cultural content', included: true },
      { name: 'Unlimited emotion exploration', included: true },
      { name: 'Community forum access', included: true },
      { name: '24/7 priority support', included: true },
      { name: 'Advanced cultural insights', included: true },
      { name: 'Custom solutions', included: true }
    ],
    cta: 'Contact Us'
  }
];

export default function PlansPage() {
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
          src="/images/plans/pattern.png"
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
            Choose Your Journey
          </h1>
          <div className="flex justify-center gap-2 text-[#1a237e]/60 mb-6">
            <span>✧</span>
            <span>✦</span>
            <span>✧</span>
          </div>
          <p className="text-xl text-[#1a237e]/70 max-w-3xl mx-auto leading-relaxed">
            Select the perfect plan to begin your cultural exploration. 
            Each plan is designed to provide a unique and enriching experience.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white/80 backdrop-blur-sm rounded-[30px] overflow-hidden border 
                       ${plan.highlight 
                         ? 'border-[#1a237e] shadow-xl shadow-[#1a237e]/10' 
                         : 'border-[#E3F2FD]'
                       } hover:shadow-xl transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#1a237e] text-white px-4 py-1 rounded-b-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <plan.icon className="w-8 h-8 text-[#1a237e]" />
                  <h2 className="text-2xl font-bold text-[#1a237e]">{plan.name}</h2>
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-[#1a237e] mb-2">{plan.price}</div>
                  <p className="text-[#1a237e]/70">{plan.description}</p>
                </div>
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center
                                  ${feature.included 
                                    ? 'bg-[#1a237e]' 
                                    : 'bg-[#E3F2FD]'
                                  }`}>
                        <FiCheck className={`w-3 h-3 ${feature.included ? 'text-white' : 'text-[#1a237e]/30'}`} />
                      </div>
                      <span className={feature.included ? 'text-[#1a237e]/90' : 'text-[#1a237e]/40'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                                ${plan.highlight
                                  ? 'bg-gradient-to-r from-[#1a237e] to-[#0d47a1] text-white hover:shadow-lg hover:shadow-[#1a237e]/20'
                                  : 'bg-[#E3F2FD] text-[#1a237e] hover:bg-[#1a237e] hover:text-white'
                                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#1a237e]/70">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <FiZap className="text-[#1a237e]" />
            <span className="text-[#1a237e] font-medium">Instant access to all features during trial</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 