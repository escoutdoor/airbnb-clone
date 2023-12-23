import { Prisma } from '@prisma/client'
import { reviewSelect } from 'src/review/review.select'
import { userSelect } from 'src/user/user.select'

export const locationSelect: Prisma.LocationSelect = {
	id: true,
	latitude: true,
	longitude: true,
}

export const apartmentSelect: Prisma.ApartmentSelect = {
	id: true,
	name: true,
	images: true,
	price: true,
	description: true,
	type: true,
	beds: true,
	bedrooms: true,
	bathrooms: true,
	maxGuests: true,
	hostLanguages: true,
	location: {
		select: locationSelect,
	},
	reviews: {
		select: reviewSelect,
	},
	user: {
		select: userSelect,
	},
}

export const apartmentItemSelect: Prisma.ApartmentSelect = {
	id: true,
	name: true,
	images: true,
	price: true,
	description: true,
	user: {
		select: userSelect,
	},
}
