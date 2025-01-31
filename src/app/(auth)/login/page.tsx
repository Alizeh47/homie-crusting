import { LoginForm } from '@/components/auth/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - EmoConnect',
  description: 'Sign in to your EmoConnect account',
};

export default function LoginPage() {
  return <LoginForm />;
} 