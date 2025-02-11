'use client';

import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <div className={`${inter.className} ${playfair.variable}`}>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen pl-20 pt-1">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
