import { Prisma } from '@prisma/client'
import { wishlistSelect } from 'src/wishlist/wishlist.select'

export const userSelect: Prisma.UserSelect = {
	id: true,
	firstName: true,
	surName: true,
	avatar: true,
	dateOfBirth: true,
	email: true,
	phoneNumber: true,
	role: true,
	wishlists: {
		select: wishlistSelect,
	},
}
