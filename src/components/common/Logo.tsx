import Image, { ImageLoaderProps } from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  const [showImage, setShowImage] = useState(true);

  return (
    <Link href="/" className={cn('flex items-center space-x-2', className)}>
      {showImage && (
        <div className="relative w-8 h-8">
          <Image
            src="/images/logo.png"
            alt="EmoConnect"
            fill
            className="object-contain"
            priority
          />
        </div>
      )}
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