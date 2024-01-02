import { UserService } from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'

export const useProfile = () => {
	const { data: session } = useSession()

	const {
		data: profile,
		isError,
		isLoading,
		status,
		isFetching,
		error,
	} = useQuery({
		queryKey: ['profile', session?.user.id],
		queryFn: async () => UserService.getProfile(),
		select: ({ data }) => data,
		enabled: !!session?.user.id,
	})

	return {
		profile,
		isError,
		isLoading,
		status,
		isFetching,
		error,
	}
}
