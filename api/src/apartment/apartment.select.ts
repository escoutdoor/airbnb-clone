import { Prisma } from '@prisma/client'

export const apartmentSelect: Prisma.ApartmentSelect = {
	id: true,
	name: true,
	images: true,
	price: true,
	description: true,
}
