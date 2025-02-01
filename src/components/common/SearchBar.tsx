import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  variant?: 'light' | 'dark';
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchBar({
  variant = 'dark',
  className,
  placeholder = 'Search...',
  onSearch,
}: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onSearch?.(e.target.value)}
        className={cn(
          'pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 w-[200px] transition-colors',
          variant === 'light'
            ? 'border-white/30 focus:border-white focus:ring-white/20 text-white bg-white/10 placeholder-white/70'
            : 'border-gray-200 focus:border-primary focus:ring-primary/20 text-gray-900 bg-white'
        )}
      />
      <Search
        className={cn(
          'absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6',
          variant === 'light' ? 'text-white/70' : 'text-gray-400'
        )}
      />
    </div>
  );
} 