'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#E3F2FD]/30 pt-12 md:pt-20 pb-6 md:pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">
            Stay Connected
          </h2>
          <p className="text-[#1a237e]/70 mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base px-4 md:px-0">
            Join our newsletter to receive updates about cultural events, new features, 
            and exclusive content.
          </p>
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 md:gap-4 px-4 md:px-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 md:px-6 py-2.5 md:py-3 rounded-full border border-[#E3F2FD] bg-white/50 backdrop-blur-sm
                       focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e]
                       text-[#1a237e] placeholder-[#1a237e]/50 text-sm md:text-base"
            />
            <button className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-[#1a237e] to-[#0d47a1] text-white 
                           rounded-full font-medium hover:shadow-lg transform hover:scale-105 
                           transition-all duration-300 text-sm md:text-base whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-[#1a237e] mb-3 md:mb-4 block">
              Homie
            </Link>
            <p className="text-[#1a237e]/70 mb-6 text-sm md:text-base">
              Connecting cultures, sharing stories, and building bridges across the world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-[#1a237e] mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Emotions', href: '/emotions' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#1a237e]/70 hover:text-[#1a237e] transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-semibold text-[#1a237e] mb-3 md:mb-4 text-sm md:text-base">Resources</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'Compare Plans', href: '/plans' },
                { name: 'Resources', href: '/resources' },
                { name: 'Health & Safety', href: '/health-safety' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#1a237e]/70 hover:text-[#1a237e] transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-[#1a237e] mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
            <ul className="space-y-2 md:space-y-3">
              {[
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Request Beta', href: '/beta' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#1a237e]/70 hover:text-[#1a237e] transition-colors text-sm md:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Authentication Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 px-4 md:px-0">
          <Link href="/login" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 md:px-6 py-2 rounded-lg border-2 border-[#1a237e] text-[#1a237e] font-medium
                       hover:bg-[#1a237e] hover:text-white transition-all duration-300 text-sm md:text-base"
            >
              Log In
            </motion.button>
          </Link>
          <Link href="/signup" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 md:px-6 py-2 rounded-lg bg-gradient-to-r from-[#1a237e] to-[#0d47a1] text-white font-medium
                       hover:shadow-lg transition-all duration-300 text-sm md:text-base"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-[#1a237e]/10 pt-6 md:pt-8">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className="text-[#1a237e]/70 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Homie. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6">
              {[
                { icon: FiFacebook, href: 'https://facebook.com' },
                { icon: FiInstagram, href: 'https://instagram.com' },
                { icon: FiTwitter, href: 'https://twitter.com' }
              ].map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="text-[#1a237e]/70 hover:text-[#1a237e] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 