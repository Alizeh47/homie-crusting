'use client';

import { useState, useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';

function BaseClientProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return <AuthProvider>{children}</AuthProvider>;
}

// Export the component directly instead of using dynamic import
export const ClientProvider = BaseClientProvider; 