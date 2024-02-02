import { TWishlistSchema } from '@/lib/schemas/wishlist.schema'
import { WishlistService } from '@/services/wishlist/wishlist.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateWishlist = () => {
	const queryClient = useQueryClient()

	const {
		mutate: updateWishlist,
		error,
		status,
		isError,
		isPending,
		failureReason,
	} = useMutation({
		mutationKey: ['update wishlist'],
		mutationFn: async ({
			data,
			wishlistId,
		}: {
			data: TWishlistSchema
			wishlistId: string
		}) => WishlistService.update(wishlistId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
			queryClient.invalidateQueries({
				queryKey: ['wishlist'],
			})
		},
	})

	return {
		updateWishlist,
		error,
		status,
		isError,
		isPending,
		failureReason,
	}
}
