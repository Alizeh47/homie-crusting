'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiStar, FiHeart, FiUsers, FiGlobe, FiAward, FiBook, FiSmile, FiMap, FiShield, FiMessageCircle } from 'react-icons/fi';
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

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface PlatformFeature {
  title: string;
  description: string;
  icon: IconType;
  image: string;
  link: string;
}

const platformFeatures: PlatformFeature[] = [
  {
    title: 'Cultural Emotions',
    description: 'Explore unique emotional concepts from different cultures, understanding how various societies experience and express feelings.',
    icon: FiSmile,
    image: '/images/destinations/maldives.jpg',
    link: '/emotions'
  },
  {
    title: 'Language & Stories',
    description: 'Discover beautiful phrases, traditional stories, and linguistic diversity from around the world.',
    icon: FiBook,
    image: '/images/destinations/amalfi.jpg',
    link: '/language'
  },
  {
    title: 'Cultural Media',
    description: 'Immerse yourself in a rich collection of cultural media, from traditional art to modern expressions.',
    icon: FiGlobe,
    image: '/images/destinations/kyoto.jpg',
    link: '/media'
  },
  {
    title: 'Cultural Destinations',
    description: 'Virtual tours and insights into significant cultural locations and heritage sites.',
    icon: FiMap,
    image: '/images/destinations/paris.jpg',
    link: '/destinations'
  },
  {
    title: 'Health & Safety',
    description: 'Guidelines and resources for safe and respectful cultural exchange experiences.',
    icon: FiShield,
    image: '/images/destinations/patagonia.jpg',
    link: '/health-safety'
  },
  {
    title: 'Community Forum',
    description: 'Connect with fellow cultural enthusiasts, share experiences, and learn from each other.',
    icon: FiMessageCircle,
    image: '/images/destinations/tigers-nest.jpg',
    link: '/community'
  }
];

const teamMembers: TeamMember[] = [
  {
    name: 'Alex Volkov',
    role: 'Founder & CEO',
    image: '/images/avatars/avatar3.jpg',
    description: 'Passionate about connecting cultures and fostering global understanding through technology and community.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Cultural Director',
    image: '/images/avatars/avatar1.jpg',
    description: 'Expert in cross-cultural communication with 15 years of experience in cultural preservation and education.'
  },
  {
    name: 'Aisha Patel',
    role: 'Community Lead',
    image: '/images/avatars/avatar2.jpg',
    description: 'Building bridges between communities worldwide, specializing in cultural integration and community engagement.'
  }
];

const values = [
  {
    icon: FiHeart,
    title: 'Cultural Authenticity',
    description: 'Preserving and celebrating the genuine essence of diverse cultural expressions.'
  },
  {
    icon: FiUsers,
    title: 'Inclusive Community',
    description: 'Creating spaces where everyone feels welcomed, valued, and heard.'
  },
  {
    icon: FiGlobe,
    title: 'Global Connection',
    description: 'Fostering meaningful relationships across borders and cultures.'
  },
  {
    icon: FiAward,
    title: 'Excellence',
    description: 'Striving for the highest quality in cultural education and exchange.'
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E3F2FD] via-white to-white">
      {/* Decorative Elements */}
      <FloatingIcon icon={FiStar} className="top-20 left-[10%]" />
      <FloatingIcon icon={FiHeart} className="top-40 right-[15%]" delay={1} />
      <FloatingIcon icon={FiStar} className="bottom-40 left-[20%]" delay={2} />
      <FloatingIcon icon={FiHeart} className="top-60 right-[25%]" delay={1.5} />

      {/* Hero Section with Background */}
      <div className="relative h-[500px] mb-20">
        <Image
          src="/images/hero.jpg"
          alt="Cultural diversity background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E3F2FD]/50 to-white" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">
              Our Story
            </h1>
            <div className="flex gap-2 text-[#1a237e]/60 mb-6">
              <span>✧</span>
              <span>✦</span>
              <span>✧</span>
            </div>
            <p className="text-xl text-[#1a237e]/70 leading-relaxed">
              We're on a mission to connect cultures and bridge understanding through shared 
              experiences, emotions, and stories. Our platform brings together people from 
              all walks of life to celebrate the beautiful diversity of human expression.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-[30px] p-8 hover:shadow-xl transition-all duration-300 border border-[#E3F2FD] group"
              >
                <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-gradient-to-r from-[#1a237e] to-[#0d47a1] transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1a237e]">{value.title}</h3>
                <p className="text-[#1a237e]/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Platform Features */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]">Explore Our Platform</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.a
                href={feature.link}
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-[30px] overflow-hidden border border-[#E3F2FD] 
                            hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white">
                        <feature.icon className="w-5 h-5" />
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#1a237e]/70">{feature.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#1a237e]">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-[30px] p-8 hover:shadow-xl transition-all duration-300 border border-[#E3F2FD] group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#1a237e] text-center">{member.name}</h3>
                <p className="text-[#1a237e]/70 mb-4 text-center">{member.role}</p>
                <p className="text-[#1a237e]/70 text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Statement */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-r from-[#1a237e] to-[#0d47a1] rounded-[40px] p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              To create a world where cultural understanding flourishes, where every story matters, 
              and where connections transcend boundaries. We believe in the power of shared experiences 
              to build bridges between communities and foster global harmony.
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
} 