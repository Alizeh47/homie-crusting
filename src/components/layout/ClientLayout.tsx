'use client';

import { Inter, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';
import '@/app/globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ClientProvider } from '@/components/providers/ClientProvider';
import { Sidebar } from '@/components/layout/Sidebar';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable} font-sans antialiased bg-background text-foreground`}>
        <ClientProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Sidebar />
            <main className="flex-grow pl-20">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProvider>
      </body>
    </html>
  );
}
