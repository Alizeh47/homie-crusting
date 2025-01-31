import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password - EmoConnect',
  description: 'Reset your EmoConnect account password',
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
} 