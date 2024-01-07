'use client'

import { WishlistService } from '@/services/wishlist/wishlist.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useToggleWishlist = () => {
	const queryClient = useQueryClient()

	const {
		mutate: toggleWishlist,
		isPending,
		error,
		status,
		isError,
		isSuccess,
	} = useMutation({
		mutationKey: ['wishlist', 'toggle'],
		mutationFn: async ({
			wishlistId,
			apartmentId,
		}: {
			wishlistId: string
			apartmentId: string
		}) => await WishlistService.toggleApartment(wishlistId, apartmentId),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
		},
	})

	return {
		toggleWishlist,
		isPending,
		error,
		status,
		isError,
		isSuccess,
	}
}
