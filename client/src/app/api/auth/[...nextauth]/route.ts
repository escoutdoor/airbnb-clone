import { AuthService } from '@/services/auth/auth.service'
import { NextAuthOptions } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshToken(token: JWT): Promise<JWT> {
	const response = await AuthService.getToken(token.refreshToken)

	return {
		user: {
			id: response.user.id,
			email: response.user.email,
		},
		accessToken: response.accessToken,
		refreshToken: response.refreshToken,
	}
}

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'example@example.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) return null

				const { email, password } = credentials

				const response = await AuthService.login({ email, password })

				if (response.status == 401) {
					console.log(response.statusText)

					return null
				}

				return response.data.user
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			if (user) return { ...token, ...user }

			return await refreshToken(token)
		},

		async session({ token, session }) {
			session.user = {
				id: token.user.id,
				email: token.user.email,
			}
			session.accessToken = token.accessToken
			session.refreshToken = token.refreshToken

			return session
		},
	},
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
