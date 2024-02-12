'use client';

import AccountSettings from '@/components/pages/account-settings/AccountSettings';
import { useProfile } from '@/hooks/useProfile';

export default function AccountSettingsPage({}) {
  const { profile, isError, isLoading } = useProfile();

  if (!profile) {
    return;
  }

  return <AccountSettings profile={profile} />;
}
