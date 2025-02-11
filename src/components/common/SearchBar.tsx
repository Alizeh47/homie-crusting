'use client';

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function SearchBar({ variant = 'light', className }: SearchBarProps) {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push('/search');
  };

  return (
    <div
      onClick={handleSearchClick}
      className={cn(
        'flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-colors',
        variant === 'light'
          ? 'bg-white/10 hover:bg-white/20 text-white'
          : 'bg-gray-100 hover:bg-gray-200 text-gray-600',
        className
      )}
    >
      <Search className="h-4 w-4" />
      <span className="text-sm">Search...</span>
    </div>
  );
} 