import { IReview } from './review.interface'
import { IUser } from './user.interface'

export interface IApartment extends IApartmentItem {
	type: ApartmentType
	beds: number
	bedrooms: number
	bathrooms: number
	maxGuests: number
	amenities: string[]
	hostLanguages: string[]
	reviews: IReview[]
	user: IUser
}

export interface IApartmentItem {
	id: string
	name: string
	images: string[]
	price: number
	description: string[]
	location: IApartmentLocation
}

export interface IApartmentLocation {
	id: string
	country: string
	city: string
	street: string
	houseNumber: number
	apartmentNumber?: number
	zipCode?: string
	latitude: number
	longitude: number
}

export type ApartmentType = 'room' | 'entire home'

export interface IApartmentResponse {
	apartments: IApartmentItem[]
	total: number
}
