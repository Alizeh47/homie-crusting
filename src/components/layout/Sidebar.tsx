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
  Menu,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavItem[] = [
    { href: '/', label: 'Home', icon: <Home className="h-7 w-7 md:h-7 md:w-7" /> },
    { href: '/travel', label: 'Travel & Destinations', icon: <Map className="h-7 w-7 md:h-7 md:w-7" /> },
    { href: '/food', label: 'Food & Cuisine', icon: <Utensils className="h-7 w-7 md:h-7 md:w-7" /> },
    { href: '/culture', label: 'Cultural Facts', icon: <Globe className="h-7 w-7 md:h-7 md:w-7" /> },
    { href: '/language', label: 'Language & Words', icon: <Languages className="h-7 w-7 md:h-7 md:w-7" /> },
    { href: '/reviews', label: 'Reviews & Thoughts', icon: <MessageCircle className="h-7 w-7 md:h-7 md:w-7" /> },
    { href: '/media', label: 'Media & Influencers', icon: <Film className="h-7 w-7 md:h-7 md:w-7" /> },
    { href: '/about', label: 'About Us', icon: <Info className="h-7 w-7 md:h-7 md:w-7" /> },
  ];

  return (
    <>
      {/* Desktop Sidebar - Unchanged */}
      <aside
        className={cn(
          'hidden md:block fixed left-0 top-9 h-[calc(100vh-3rem)] bg-white shadow-lg transition-all duration-300 z-40',
          isExpanded ? 'w-64' : 'w-20'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Desktop Navigation Items */}
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
                      <div className="absolute left-full ml-2 px-1 py-0.5 bg-[#011f4b] text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap">
                        {item.label}
                      </div>
                    )}
                  </Link>
                );
              })}

              {/* Desktop Authentication Buttons */}
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

          {/* Desktop User Profile & Settings */}
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

          {/* Desktop Expand/Collapse Button */}
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

      {/* Mobile Sidebar */}
      <aside className="md:hidden fixed left-0 top-16 bottom-0 w-16 bg-white shadow-lg z-50 flex flex-col">
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="flex flex-col items-center space-y-6">
            {navigationItems.slice(0, 6).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-colors relative group',
                    isActive
                      ? 'text-[#011f4b] bg-blue-50'
                      : 'text-gray-600 hover:text-[#011f4b] hover:bg-gray-50'
                  )}
                >
                  <div className="h-6 w-6">{item.icon}</div>
                  <span className="text-[10px] mt-1">{item.label.split(' ')[0]}</span>
                  
                  {/* Tooltip */}
                  <div className="absolute left-full ml-2 px-2 py-1 bg-[#011f4b] text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 whitespace-nowrap">
                    {item.label}
                  </div>
                </Link>
              );
            })}

            {/* More Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex flex-col items-center justify-center w-12 h-12 rounded-lg text-gray-600 hover:text-[#011f4b] hover:bg-gray-50 relative group"
            >
              <Menu className="h-6 w-6" />
              <span className="text-[10px] mt-1">More</span>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-2 px-2 py-1 bg-[#011f4b] text-white text-xs rounded-md opacity-0 pointer-events-none group-hover:opacity-100 whitespace-nowrap">
                More Options
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div 
              className="absolute left-20 top-20 w-64 bg-white rounded-lg shadow-xl p-4" 
              onClick={e => e.stopPropagation()}
            >
              <div className="space-y-2">
                {navigationItems.slice(6).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center p-2 text-gray-600 hover:text-[#011f4b] hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="h-6 w-6 mr-3">{item.icon}</div>
                    <span className="text-sm">{item.label}</span>
                  </Link>
                ))}
                {!user && (
                  <>
                    <Link
                      href="/login"
                      className="flex items-center p-2 text-gray-600 hover:text-[#011f4b] hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <LogIn className="h-6 w-6 mr-3" />
                      <span className="text-sm">Login</span>
                    </Link>
                    <Link
                      href="/signup"
                      className="flex items-center p-2 text-gray-600 hover:text-[#011f4b] hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <UserPlus className="h-6 w-6 mr-3" />
                      <span className="text-sm">Sign Up</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
} 