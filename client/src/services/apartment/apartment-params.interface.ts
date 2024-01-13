import { ApartmentType } from '@/shared/interfaces/apartment.interface'

export interface IApartmentFilterParams {
	searchTerm?: string
	category?: string
	type?: ApartmentType
	minPrice?: string
	maxPrice?: string
	bedrooms?: string
	beds?: string
	bathrooms?: string
	maxGuests?: string
	amenities?: string[]
	hostLanguages?: string[]
}
