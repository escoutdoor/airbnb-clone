import { IsString, IsUUID } from 'class-validator'

export class WishlistDto {
	@IsString({
		message: 'Wishlist name must be a string',
	})
	name: string
}

export class WishlistToggleApartmentDto {
	@IsString({
		message: 'Apartment id must be a string',
	})
	@IsUUID()
	apartmentId: string
}
