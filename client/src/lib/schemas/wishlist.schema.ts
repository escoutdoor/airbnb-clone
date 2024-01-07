import { z } from 'zod'

export const wishlistSchema = z.object({
	name: z
		.string()
		.min(1, {
			message: 'Please enter a name for your wishlist',
		})
		.max(50, {
			message: 'Wishlist name must be less than 50 characters',
		}),
})

export type TWishlistSchema = z.infer<typeof wishlistSchema>
