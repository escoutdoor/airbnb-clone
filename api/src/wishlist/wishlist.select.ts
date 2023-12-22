import { Prisma } from '@prisma/client'
import { apartmentSelect } from 'src/apartment/apartment.select'

export const wishlistSelect: Prisma.WishlistSelect = {
	id: true,
	name: true,
	apartments: {
		select: apartmentSelect,
	},
	userId: true,
}
