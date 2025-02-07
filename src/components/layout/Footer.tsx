'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#E3F2FD]/30 pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#1a237e] to-[#0d47a1]">
            Stay Connected
          </h2>
          <p className="text-[#1a237e]/70 mb-8 max-w-xl mx-auto">
            Join our newsletter to receive updates about cultural events, new features, 
            and exclusive content.
          </p>
          <div className="max-w-xl mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-[#E3F2FD] bg-white/50 backdrop-blur-sm
                       focus:outline-none focus:ring-2 focus:ring-[#1a237e]/20 focus:border-[#1a237e]
                       text-[#1a237e] placeholder-[#1a237e]/50"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-[#1a237e] to-[#0d47a1] text-white 
                           rounded-full font-medium hover:shadow-lg transform hover:scale-105 
                           transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-serif font-bold text-[#1a237e] mb-4 block">
              Homie
            </Link>
            <p className="text-[#1a237e]/70 mb-6">
              Connecting cultures, sharing stories, and building bridges across the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#1a237e] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Emotions', href: '/emotions' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#1a237e]/70 hover:text-[#1a237e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-[#1a237e] mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: 'Compare Plans', href: '/plans' },
                { name: 'Resources', href: '/resources' },
                { name: 'Health & Safety', href: '/health-safety' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#1a237e]/70 hover:text-[#1a237e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[#1a237e] mb-4">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Request Beta', href: '/beta' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#1a237e]/70 hover:text-[#1a237e] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Authentication Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg border-2 border-[#1a237e] text-[#1a237e] font-medium
                       hover:bg-[#1a237e] hover:text-white transition-all duration-300"
            >
              Log In
            </motion.button>
          </Link>
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#1a237e] to-[#0d47a1] text-white font-medium
                       hover:shadow-lg transition-all duration-300"
            >
              Sign Up
            </motion.button>
          </Link>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-[#1a237e]/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#1a237e]/70 text-sm">
              © {new Date().getFullYear()} Homie. All rights reserved.
            </p>
            <div className="flex gap-6">
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
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 