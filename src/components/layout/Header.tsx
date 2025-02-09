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
    { href: '/travel', label: 'Destinations', icon: Plane },
    { href: '/food', label: 'Food ', icon: UtensilsCrossed },
    { href: '/culture', label: 'Cultural Facts', icon: Landmark },
    { href: '/language', label: 'Language', icon: Languages },
    { href: '/reviews', label: 'Reviews', icon: MessageSquare },
    { href: '/media', label: 'Media ', icon: Film },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled 
          ? 'bg-white/95 shadow-sm backdrop-blur-sm' 
          : 'bg-transparent'
      )}
      style={{ position: 'fixed', willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Desktop Layout - Unchanged */}
        <div className="hidden md:flex justify-between items-center py-3">
          <div className="-ml-12 sm:-ml-16">
            <Logo variant={isScrolled ? 'dark' : 'light'} />
          </div>

          <nav className="flex items-center space-x-12 ml-16">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-[8px] xs:text-[9px] sm:text-sm font-medium transition-colors flex items-center justify-center gap-0.5 sm:gap-2 whitespace-nowrap',
                  isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {item.icon && <item.icon className="h-2 w-2 xs:h-2 xs:w-2 sm:h-4 sm:w-4" />}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end space-x-1.5 xs:space-x-2 ml-6 sm:ml-8">
            <div className="flex items-center">
              <SearchBar 
                variant={isScrolled ? 'dark' : 'light'} 
                className="w-20 xs:w-24 sm:w-auto text-[8px] xs:text-[9px] sm:text-sm" 
              />
            </div>

            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center justify-center px-2 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[8px] xs:text-[9px] sm:text-sm font-medium transition-colors whitespace-nowrap',
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-600'
                  : 'bg-white text-gray-900 hover:bg-white/90'
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile Layout - Redesigned */}
        <div className="md:hidden flex justify-between items-center py-2">
          <div className="flex-shrink-0">
            <Logo variant={isScrolled ? 'dark' : 'light'} className="h-8 w-auto" />
          </div>

          <div className="flex items-center space-x-2">
            <Link
              href="/signup"
              className={cn(
                'inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap',
                isScrolled
                  ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  : 'bg-white/10 text-white hover:bg-white/20'
              )}
            >
              Sign Up
            </Link>

            <Link
              href="/contact"
              className={cn(
                'inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-medium transition-colors whitespace-nowrap',
                isScrolled
                  ? 'bg-primary text-white hover:bg-primary-600'
                  : 'bg-white text-gray-900 hover:bg-white/90'
              )}
            >
              Contact
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-2 rounded-full transition-colors',
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white shadow-lg rounded-b-lg">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
} 