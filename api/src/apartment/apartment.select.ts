import { Prisma } from '@prisma/client'
import { reviewSelect } from 'src/review/review.select'
import { userSelect } from 'src/user/user.select'

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

export const reservationSelect: Prisma.ReservationSelect = {
	id: true,
	startDate: true,
	endDate: true,
	createdAt: true,
	guests: true,
	totalPrice: true,
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
}

export const apartmentItemSelect: Prisma.ApartmentSelect = {
	id: true,
	name: true,
	images: true,
	price: true,
	description: true,
}
