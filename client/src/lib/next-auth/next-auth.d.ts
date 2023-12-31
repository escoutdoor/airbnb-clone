import { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth'

declare module 'next-auth' {
	interface Session {
		user: {
			id: string
			email: string
		}
		accessToken: string
		refreshToken: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user: {
			id: string
			email: string
		}
		accessToken: string
		refreshToken: string
	}
}
