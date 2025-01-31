'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home,
  Map,
  Heart,
  Utensils,
  Info,
  ChevronLeft,
  ChevronRight,
  X,
  Menu,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Destinations', href: '/destinations', icon: Map },
  { name: 'Emotions', href: '/emotions', icon: Heart },
  { name: 'Food & Culture', href: '/food', icon: Utensils },
  { name: 'About Us', href: '/about', icon: Info },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 bottom-0 z-40 bg-white border-r border-gray-200',
          'transition-all duration-300 ease-in-out',
          'hidden lg:flex',
          isCollapsed ? 'w-20' : 'w-[280px]'
        )}
      >
        <div className="flex flex-col h-full w-full">
          {/* Navigation */}
          <nav className="flex-1 px-4 py-20 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-lg transition-all duration-300',
                    'hover:bg-gray-100 group relative',
                    isActive && 'bg-primary/10 text-primary'
                  )}
                >
                  <Icon className={cn(
                    'h-5 w-5 shrink-0 transition-transform duration-300',
                    isActive && 'scale-110'
                  )} />
                  <span
                    className={cn(
                      'ml-3 text-sm font-medium transition-all duration-300',
                      isCollapsed ? 'opacity-0 w-0' : 'opacity-100'
                    )}
                  >
                    {item.name}
                  </span>

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap scale-95 group-hover:scale-100 transform duration-200">
                      {item.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Collapse Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn(
              'absolute top-1/2 -right-3 w-6 h-6 bg-white border border-gray-200 rounded-full',
              'flex items-center justify-center text-gray-600 hover:text-primary',
              'transition-all duration-300 hover:scale-110',
              'focus:outline-none focus:ring-2 focus:ring-primary/20'
            )}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 transition-transform duration-300" />
            ) : (
              <ChevronLeft className="h-4 w-4 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          'transition-opacity duration-300',
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-[280px] bg-white',
            'transform transition-transform duration-300 ease-in-out',
            isMobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-20 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center px-3 py-2 rounded-lg',
                      'transition-all duration-300 hover:bg-gray-100',
                      isActive && 'bg-primary/10 text-primary'
                    )}
                  >
                    <Icon className={cn(
                      'h-5 w-5 shrink-0',
                      'transition-transform duration-300',
                      isActive && 'scale-110'
                    )} />
                    <span className="ml-3 text-sm font-medium">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 lg:hidden',
          'w-12 h-12 bg-primary text-white rounded-full',
          'flex items-center justify-center',
          'shadow-lg hover:shadow-xl',
          'transform transition-transform duration-300',
          'hover:scale-110 active:scale-95',
          'focus:outline-none focus:ring-2 focus:ring-primary/20'
        )}
      >
        <Menu className="h-6 w-6" />
      </button>
    </>
  );
} 