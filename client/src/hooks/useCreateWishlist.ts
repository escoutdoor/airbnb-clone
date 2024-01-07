'use client'

import { TWishlistSchema } from '@/lib/schemas/wishlist.schema'
import { WishlistService } from '@/services/wishlist/wishlist.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateWishlist = () => {
	const queryClient = useQueryClient()

	const {
		mutate: createWishlist,
		isPending,
		error,
		status,
		isError,
		isSuccess,
	} = useMutation({
		mutationKey: ['wishlist', 'create'],
		mutationFn: async (data: TWishlistSchema) =>
			await WishlistService.create(data),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['profile'],
			})
		},
	})

	return {
		createWishlist,
		isPending,
		error,
		status,
		isError,
		isSuccess,
	}
}
