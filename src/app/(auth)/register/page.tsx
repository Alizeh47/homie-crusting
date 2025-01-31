import { RegisterForm } from '@/components/auth/RegisterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account - EmoConnect',
  description: 'Create your EmoConnect account',
};

export default function RegisterPage() {
  return <RegisterForm />;
} 