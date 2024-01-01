import { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth'
import { Role } from '@/shared/interfaces/user.interface'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			email: string
			role: Role
		}
		accessToken: string
		refreshToken: string
		expiresIn: number
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			id: string
			email: string
			role: Role
		}
		accessToken: string
		refreshToken: string
		expiresIn: number
	}
}
