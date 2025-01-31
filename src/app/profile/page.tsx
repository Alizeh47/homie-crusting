import { ProfileForm } from '@/components/profile/ProfileForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile Settings - EmoConnect',
  description: 'Manage your EmoConnect profile settings',
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <ProfileForm />
      </div>
    </div>
  );
} 