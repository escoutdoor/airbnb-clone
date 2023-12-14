export interface IApartmentFilterParams {
	type?: ApartmentType
	minPrice?: number
	maxPrice?: number
	bedrooms?: number
	beds?: number
	bathrooms?: number
	amenities?: string[]
	languages?: string[]
}

export type ApartmentType = 'room' | 'entire home'
