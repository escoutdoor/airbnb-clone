import { Prisma } from '@prisma/client'

export const locationSelect: Prisma.LocationSelect = {
	id: true,
	latitude: true,
	longitude: true,
	country: true,
	city: true,
	street: true,
	houseNumber: true,
	apartmentNumber: true,
	zipCode: true,
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
	amenities: true,
}

export const apartmentItemSelect: Prisma.ApartmentSelect = {
	id: true,
	name: true,
	images: true,
	price: true,
	description: true,
}
