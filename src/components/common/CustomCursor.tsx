'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type CursorVariant = 'default' | 'romantic' | 'spiritual' | 'adventure' | 'relaxing' | 'emotion' | 'food';

interface Position {
  x: number;
  y: number;
}

export function CustomCursor() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorVariant = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for data-cursor attribute
      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor') as CursorVariant;
      if (cursorType) {
        setVariant(cursorType);
      } else {
        setVariant('default');
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousemove', updateCursorVariant);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousemove', updateCursorVariant);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const cursorClasses = {
    default: 'bg-white/30 backdrop-blur-sm border border-white/50',
    romantic: 'bg-pink-400/30 backdrop-blur-sm border border-pink-400/50',
    spiritual: 'bg-indigo-400/30 backdrop-blur-sm border border-indigo-400/50',
    adventure: 'bg-red-400/30 backdrop-blur-sm border border-red-400/50',
    relaxing: 'bg-blue-400/30 backdrop-blur-sm border border-blue-400/50',
    emotion: 'bg-yellow-400/30 backdrop-blur-sm border border-yellow-400/50',
    food: 'bg-orange-400/30 backdrop-blur-sm border border-orange-400/50',
  };

  return (
    <>
      {/* Main Cursor */}
      <div
        className={cn(
          'fixed pointer-events-none z-[100] transition-opacity duration-300 rounded-full',
          isVisible ? 'opacity-100' : 'opacity-0',
          cursorClasses[variant]
        )}
        style={{
          width: variant === 'default' ? '20px' : '40px',
          height: variant === 'default' ? '20px' : '40px',
          transform: `translate(${position.x - (variant === 'default' ? 10 : 20)}px, ${
            position.y - (variant === 'default' ? 10 : 20)
          }px)`,
          transition: 'width 0.3s, height 0.3s, transform 0.1s',
        }}
      />

      {/* Cursor Trail */}
      <div
        className={cn(
          'fixed pointer-events-none z-[99] w-4 h-4 rounded-full transition-opacity duration-300',
          isVisible ? 'opacity-60' : 'opacity-0',
          cursorClasses[variant]
        )}
        style={{
          transform: `translate(${position.x - 8}px, ${position.y - 8}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
    </>
  );
}

export default CustomCursor; 