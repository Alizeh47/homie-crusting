'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Map,
  Utensils,
  Globe,
  Languages,
  MessageCircle,
  Film,
  ChevronLeft,
  ChevronRight,
  User,
  Settings,
  Info,
  LogIn,
  UserPlus,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const navigationItems: NavItem[] = [
    { href: '/', label: 'Home', icon: <Home className="h-7 w-7" /> },
    { href: '/travel', label: 'Travel & Destinations', icon: <Map className="h-7 w-7" /> },
    { href: '/food', label: 'Food & Cuisine', icon: <Utensils className="h-7 w-7" /> },
    { href: '/culture', label: 'Cultural Facts', icon: <Globe className="h-7 w-7" /> },
    { href: '/language', label: 'Language & Words', icon: <Languages className="h-7 w-7" /> },
    { href: '/reviews', label: 'Reviews & Thoughts', icon: <MessageCircle className="h-7 w-7" /> },
    { href: '/media', label: 'Media & Influencers', icon: <Film className="h-7 w-7" /> },
    { href: '/about', label: 'About Us', icon: <Info className="h-7 w-7" /> },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white shadow-lg transition-all duration-300 z-40',
        isExpanded ? 'w-64' : 'w-20'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Navigation Items */}
        <nav className="flex-1 py-6 px-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors group relative',
                    isActive
                      ? 'bg-[#011f4b] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {item.icon}
                  {isExpanded ? (
                    <span className="text-sm font-medium">{item.label}</span>
                  ) : (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-[#011f4b] text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </Link>
              );
            })}

            {/* Authentication Buttons - Moved closer to About Us */}
            {!user && (
              <div className="space-y-2 mt-2">
                <Link href="/login">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-lg transition-colors group relative',
                      'bg-white text-[#00072D] hover:bg-gray-50 border-2 border-[#00072D]'
                    )}
                  >
                    <LogIn className="h-7 w-7" />
                    {isExpanded ? (
                      <span className="text-sm font-medium ml-3">Log In</span>
                    ) : (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-[#00072D] text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                        Log In
                      </div>
                    )}
                  </motion.div>
                </Link>
                <Link href="/signup">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-lg transition-colors group relative',
                      'bg-[#00072D] text-white hover:bg-[#00072D]/90'
                    )}
                  >
                    <UserPlus className="h-7 w-7" />
                    {isExpanded ? (
                      <span className="text-sm font-medium ml-3">Sign Up</span>
                    ) : (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-[#00072D] text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                        Sign Up
                      </div>
                    )}
                  </motion.div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* User Profile & Settings - Only shown when logged in */}
        {user && (
          <div className="p-4 border-t border-gray-200 space-y-2">
            <Link
              href="/profile"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors group relative"
            >
              <User className="h-7 w-7" />
              {isExpanded ? (
                <span className="text-sm font-medium">Profile</span>
              ) : (
                <div className="absolute left-full ml-2 px-2 py-1 bg-[#011f4b] text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                  Profile
                </div>
              )}
            </Link>
            <Link
              href="/settings"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors group relative"
            >
              <Settings className="h-7 w-7" />
              {isExpanded ? (
                <span className="text-sm font-medium">Settings</span>
              ) : (
                <div className="absolute left-full ml-2 px-2 py-1 bg-[#011f4b] text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                  Settings
                </div>
              )}
            </Link>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1.5 border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
          aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
        >
          {isExpanded ? (
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          ) : (
            <ChevronRight className="h-5 w-5 text-gray-600" />
          )}
        </button>
      </div>
    </aside>
  );
} 