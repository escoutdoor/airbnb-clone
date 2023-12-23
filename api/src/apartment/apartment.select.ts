import { Prisma } from '@prisma/client'
import { userSelect } from 'src/user/user.select'

export const apartmentSelect: Prisma.ApartmentSelect = {
	id: true,
	name: true,
	images: true,
	price: true,
	description: true,
	user: {
		select: {
			...userSelect,
			role: false,
			wishlists: false,
		},
	},
}
