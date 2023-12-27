import { IApartmentItem } from './apartment.interface'

export interface IUser {
	id: string
	firstName: string
	surName: string
	avatar: string
	dateOfBirth: string
	email: string
	phoneNumber: string
	createdAt: string
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
