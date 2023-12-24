import { IApartmentItem } from './apartment.interface'

export interface IUser {
	id: string
	firstName: string
	surName: string
	avatar: string
	dateOfBirth: Date
	email: string
	phoneNumber: string
}

export interface IUserDetails extends IUser {
	role: Role
	wishlists: Wishlist[]
}

export interface Wishlist {
	id: string
	name: string
	apartments: IApartmentItem[]
}

export enum Role {
	'USER' = 'USER',
	'ADMIN' = 'ADMIN',
}
