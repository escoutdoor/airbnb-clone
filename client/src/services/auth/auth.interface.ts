import { Role } from '@/shared/interfaces/user.interface'

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
