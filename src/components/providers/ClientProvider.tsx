'use client';

import { ReactNode } from 'react';
import { AuthProvider } from '@/context/AuthContext';

interface ClientProviderProps {
  children: ReactNode;
}

export function ClientProvider({ children }: ClientProviderProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
} 