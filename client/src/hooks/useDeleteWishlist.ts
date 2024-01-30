import { WishlistService } from '@/services/wishlist/wishlist.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteWishlist = () => {
	const queryClient = useQueryClient()

	const {
		mutate: deleteWishlist,
		isPending,
		error,
		status,
		isError,
		isSuccess,
	} = useMutation({
		mutationKey: ['delete wishlist'],
		mutationFn: (wishlistId: string) => WishlistService.delete(wishlistId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
		},
	})

	return {
		deleteWishlist,
		isPending,
		error,
		status,
		isError,
		isSuccess,
	}
}
