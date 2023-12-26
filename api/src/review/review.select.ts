import { Prisma } from '@prisma/client'
import { userSelect } from 'src/user/user.select'

export const reviewSelect: Prisma.ReviewSelect = {
	id: true,
	rating: true,
	text: true,
	user: {
		select: userSelect,
	},
	createdAt: true,
}
