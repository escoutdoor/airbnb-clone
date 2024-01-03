'use client'

import { useUser } from '@/hooks/useUser'

export default function UserPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const { user, isLoading, status, error, isError } = useUser(id)

	return <>{user?.firstName}</>
}
