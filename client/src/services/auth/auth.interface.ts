import { Role } from '@/shared/interfaces/user.interface'

export interface ILogin {
	email: string
	password: string
}

export interface IRegister extends ILogin {
	firstName: string
	surName: string
	phoneNumber: string
	dateOfBirth: Date
}

export interface IAuthResponse {
	user: {
		id: string
		email: string
		role: Role
	}

	accessToken: string
	refreshToken: string
	expiresIn: number
}
