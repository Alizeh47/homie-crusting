'use client';

import { useState, useEffect } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import dynamic from 'next/dynamic';

function BaseClientProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return <AuthProvider>{children}</AuthProvider>;
}

export const ClientProvider = dynamic(() => Promise.resolve(BaseClientProvider), {
  ssr: false,
}); 