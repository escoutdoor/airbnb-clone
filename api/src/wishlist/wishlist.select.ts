import { Prisma } from '@prisma/client'
import { apartmentSelect, locationSelect } from 'src/apartment/apartment.select'

export const wishlistSelect: Prisma.WishlistSelect = {
	id: true,
	name: true,
	apartments: {
		select: {
			...apartmentSelect,
			location: {
				select: locationSelect,
			},
		},
	},
	userId: true,
}
