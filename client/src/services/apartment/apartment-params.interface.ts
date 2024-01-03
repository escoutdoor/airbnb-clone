import { ApartmentType } from '@/shared/interfaces/apartment.interface'

export interface IApartmentFilterParams {
	searchTerm?: string
	category?: string
	type?: ApartmentType
	minPrice?: number
	maxPrice?: number
	bedrooms?: number
	beds?: number
	bathrooms?: number
	amenities?: string[]
	languages?: string[]
}
