'use client';

import PersonalInfo from '@/components/pages/account-settings/personal-info/PersonalInfo';
import { useProfile } from '@/hooks/useProfile';

export default function PersonalInfoPage() {
  const { profile, isLoading, isError, isFetching, status } = useProfile();

  if (!profile) {
    return;
  }

  return <PersonalInfo profile={profile} />;
}
