'use client';

import { FC } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export const SearchBar: FC<SearchBarProps> = ({ variant = 'dark', className }) => {
  return (
    <div className={cn(
      "relative flex items-center",
      className
    )}>
      <Search className={cn(
        "absolute left-3 h-4 w-4",
        variant === 'dark' ? 'text-gray-400' : 'text-white/70'
      )} />
      <input
        type="text"
        placeholder="Search..."
        className={cn(
          "pl-10 pr-4 py-2 w-full rounded-full",
          variant === 'dark' 
            ? 'bg-gray-100 focus:ring-2 focus:ring-primary/50 text-gray-900 placeholder:text-gray-500'
            : 'bg-white/10 focus:bg-white/20 text-white placeholder:text-white/70'
        )}
      />
    </div>
  );
}; 