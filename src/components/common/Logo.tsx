import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center space-x-2', className)}>
      <Image
        src="/images/logo.svg"
        alt="EmoConnect"
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <span
        className={cn(
          'font-serif text-xl font-bold',
          variant === 'light' ? 'text-white' : 'text-gray-900'
        )}
      >
        EmoConnect
      </span>
    </Link>
  );
} 