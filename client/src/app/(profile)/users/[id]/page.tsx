'use client'

import User from '@/components/pages/user/User'
import { useUser } from '@/hooks/useUser'

export default function UserPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const { user, isLoading, status, error, isError } = useUser(id)

	if (user) return <User user={user} />
}
