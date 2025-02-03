import type { Metadata } from 'next';
import { ClientLayout } from '@/components/layout/ClientLayout';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Cultural Exchange',
  description: 'Experience the world through cultural exchange',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
