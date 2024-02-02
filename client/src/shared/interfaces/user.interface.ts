import { IApartment } from './apartment.interface'

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
	wishlists: IWishlist[]
}

export interface IWishlist {
	id: string
	name: string
	userId: string
	apartments: IWishlistApartment[]
}

export interface IWishlistApartment
	extends Omit<IApartment, 'user' | 'reviews'> {}

export enum Role {
	'USER' = 'USER',
	'ADMIN' = 'ADMIN',
}
