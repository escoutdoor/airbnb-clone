import { IApartmentItem } from './apartment.interface'

export interface IUser {
	id: string
	email: string
	firstName: string
	surName: string
	avatar: string
	wishlists: Wishlist[]
}

export interface Wishlist {
	id: string
	name: string
	apartments: IApartmentItem[]
}
