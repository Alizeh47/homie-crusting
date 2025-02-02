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
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

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
        'fixed left-0 top-0 h-screen bg-white shadow-lg transition-all duration-300 z-40',
        isExpanded ? 'w-64' : 'w-20'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Navigation Items */}
        <nav className="flex-1 py-20 px-4">
          <div className="space-y-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors group relative',
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  {item.icon}
                  {isExpanded ? (
                    <span className="text-sm font-medium">{item.label}</span>
                  ) : (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* User Profile & Settings */}
        {user && (
          <div className={cn('p-4 border-t border-gray-200', isExpanded ? 'space-y-3' : '')}>
            <Link
              href="/profile"
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors group relative"
            >
              <User className="h-7 w-7" />
              {isExpanded ? (
                <span className="text-sm font-medium">Profile</span>
              ) : (
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
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
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
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