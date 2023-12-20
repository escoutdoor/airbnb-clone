import { IsString } from 'class-validator'

export class WishlistDto {
	@IsString({
		message: 'Wishlist name must be a string',
	})
	name: string
}
