import { IReview } from './review.interface'
import { IUser } from './user.interface'

export interface IApartment extends IApartmentItem {
	type: ApartmentType
	beds: number
	bedrooms: number
	bathrooms: number
	maxGuests: number
	hostLanguages: string[]
	reviews: IReview[]
}

export interface IApartmentItem {
	id: string
	name: string
	images: string[]
	price: number
	description: string[]
	location: IApartmentLocation
	user: IUser
}

export interface IApartmentLocation {
	id: string
	country: string
	city: string
	street: string
	houseNumber: string
	apartmentNumber?: string
	zipCode?: string
	latitude: number
	longitude: number
}

export type ApartmentType = 'room' | 'entire home'
