import { WishlistService } from '@/services/wishlist/wishlist.service'
import { useQuery } from '@tanstack/react-query'

export const useWishlist = (id: string) => {
	const {
		data: wishlist,
		isError,
		isLoading,
		status,
		isFetching,
		error,
	} = useQuery({
		queryKey: ['wishlist', id],
		queryFn: async () => WishlistService.getById(id),
		select: ({ data }) => data,
		enabled: !!id,
	})

	return {
		wishlist,
		isError,
		isLoading,
		status,
		isFetching,
		error,
	}
}
