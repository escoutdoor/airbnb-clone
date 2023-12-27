import { IUser } from './user.interface'

export interface IReview {
	id: string
	rating: number
	text: string
	createdAt: string
	user: IUser
}
