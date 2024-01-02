'use server'

import { authOptions } from '@/lib/next-auth/auth'
import { getServerSession } from 'next-auth'

export const getAccessToken = async () => {
	const data = await getServerSession(authOptions)

	const accessToken = data?.accessToken
	return accessToken || null
}
