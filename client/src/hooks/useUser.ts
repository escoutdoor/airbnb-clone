import { UserService } from '@/services/user/user.service'
import { useQuery } from '@tanstack/react-query'

export const useUser = (userId: string) => {
	const {
		data: user,
		isLoading,
		status,
		error,
		isError,
		refetch,
	} = useQuery({
		queryKey: ['user', userId],
		queryFn: async () => await UserService.getById(userId),
		select: ({ data }) => data,
		enabled: !!userId,
	})

	return {
		user,
		isLoading,
		status,
		error,
		isError,
		refetch,
	}
}
