'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiStar, FiHeart } from 'react-icons/fi';
import Image from 'next/image';
import { IconType } from 'react-icons';

const ContactForm = dynamic(() => import('@/components/sections/contact/ContactForm'));
const MapLocation = dynamic(() => import('@/components/sections/contact/MapLocation'));

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

export default function ContactPage() {
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
          src="/images/contact/connection.png"
          alt="Decorative connection pattern"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-6xl md:text-7xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">
                Let's Connect
              </h1>
              <div className="flex justify-center gap-2 text-[#1a237e]/60">
                <span>✧</span>
                <span>✦</span>
                <span>✧</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-[#1a237e]/70 max-w-2xl mx-auto leading-relaxed"
            >
              Every connection starts with a simple hello. Whether you have questions, ideas, 
              or just want to share your story, we're here to listen and create something amazing together.
            </motion.p>
          </div>

          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-lg rounded-[40px] p-8 md:p-12 shadow-xl mb-16 border border-[#E3F2FD]"
          >
            <ContactForm />
          </motion.div>

          {/* Additional Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Email Us',
                content: 'support@culturalexchange.com',
                icon: FiMail,
                gradient: 'from-[#4fc3f7] to-[#29b6f6]',
                delay: 0.8
              },
              {
                title: 'Call Us',
                content: '+1 (555) 123-4567',
                icon: FiPhone,
                gradient: 'from-[#4db6ac] to-[#26a69a]',
                delay: 1.0
              },
              {
                title: 'Visit Us',
                content: '123 Cultural Street, NY 10001',
                icon: FiMapPin,
                gradient: 'from-[#7986cb] to-[#5c6bc0]',
                delay: 1.2
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/80 backdrop-blur-sm rounded-[30px] p-8 hover:shadow-xl transition-all duration-300 border border-[#E3F2FD] group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E3F2FD]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r ${item.gradient} transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1a237e]">{item.title}</h3>
                <p className="text-[#1a237e]/70">{item.content}</p>
              </motion.div>
            ))}
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="rounded-[40px] overflow-hidden shadow-xl border border-[#E3F2FD] bg-white"
          >
            <div className="p-8 text-center">
              <h2 className="text-2xl font-serif font-bold text-[#1a237e] mb-4">Find Us Here</h2>
              <p className="text-[#1a237e]/70 mb-8">Come visit us and experience our cultural exchange firsthand</p>
            </div>
            <MapLocation />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 