'use client';

import { FC } from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <div className={cn(
      'font-serif text-2xl font-bold',
      variant === 'dark' ? 'text-gray-900' : 'text-white',
      className
    )}>
      EmoConnect
    </div>
  )
} 