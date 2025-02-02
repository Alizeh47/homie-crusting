'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Plane, UtensilsCrossed, Landmark, Languages, MessageSquare, Film } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Logo } from '@/components/common/Logo';
import { SearchBar } from '@/components/common/SearchBar';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/destinations', label: 'Travel & Destinations', icon: Plane },
    { href: '/food', label: 'Food & Cuisine', icon: UtensilsCrossed },
    { href: '/culture', label: 'Cultural Facts', icon: Landmark },
    { href: '/language', label: 'Language & Words', icon: Languages },
    { href: '/reviews', label: 'Reviews & Thoughts', icon: MessageSquare },
    { href: '/media', label: 'Media & Influencers', icon: Film },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 shadow-sm backdrop-blur-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Logo variant={isScrolled ? 'dark' : 'light'} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors flex items-center justify-center gap-2',
                  isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-end space-x-4 ml-auto">
            {/* Search Bar */}
            <div className="hidden md:flex items-center">
              <SearchBar variant={isScrolled ? 'dark' : 'light'} />
            </div>

            {/* Contact Us Button */}
            <Link
              href="/contact"
              className={cn(
                'hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium transition-colors',
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-600'
                  : 'bg-white text-gray-900 hover:bg-white/90'
              )}
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'md:hidden p-3 rounded-full transition-colors',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col items-center space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-6 py-3 text-base font-medium transition-colors w-full text-center flex items-center justify-center gap-5',
                    isScrolled
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && <item.icon className="h-8 w-8" />}
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-6 py-3 text-base font-medium bg-primary text-white rounded-lg w-full text-center flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 