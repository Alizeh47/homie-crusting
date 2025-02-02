'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Let's Connect Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif tracking-wide mb-8">
            LET'S CONNECT WITH US
          </h2>
          <div className="max-w-xl mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="flex-1 px-6 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400"
            />
            <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl mb-4">Homie</h3>
            <p className="text-gray-600 mb-4">
              A platform dedicated to exploring and understanding emotions across different cultures,
              fostering connections and shared experiences worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-gray-600">About Us</Link></li>
              <li><Link href="/emotions" className="hover:text-gray-600">Emotions</Link></li>
              <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <ul className="space-y-3">
              <li><Link href="/compare" className="hover:text-gray-600">Compare Plans</Link></li>
              <li><Link href="/resources" className="hover:text-gray-600">Resources</Link></li>
              <li><Link href="/safety" className="hover:text-gray-600">Health & Safety</Link></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <ul className="space-y-3">
              <li><Link href="/terms" className="hover:text-gray-600">Terms of service</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-600">Privacy & Policy</Link></li>
              <li><Link href="/beta" className="hover:text-gray-600">Request Beta</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-end gap-6 mb-8">
          <Link href="https://facebook.com" className="hover:text-gray-600">Facebook</Link>
          <Link href="https://instagram.com" className="hover:text-gray-600">Instagram</Link>
          <Link href="https://twitter.com" className="hover:text-gray-600">Twitter</Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          ©2024 Homie | All Rights Reserved
        </div>
      </div>
    </footer>
  );
} 