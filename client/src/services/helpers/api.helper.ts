'use server';

import { auth } from '@/lib/next-auth/auth';

export const getAccessToken = async () => {
  const data = await auth();

  const accessToken = data?.accessToken;
  return accessToken || null;
};
