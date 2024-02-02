import { AuthService } from '@/services/auth/auth.service'
import {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from 'next'
import { NextAuthOptions, getServerSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'

async function refreshToken(token: JWT): Promise<JWT> {
	const response = await AuthService.getToken(token.refreshToken)

	console.log('refresh')

	return {
		...token,
		expiresIn: response.expiresIn,
		accessToken: response.accessToken,
		refreshToken: response.refreshToken,
	}
}

const authOptions: NextAuthOptions = {
	secret: process.env.JWT_SECRET,
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'example@example.com',
				},
				password: {
					label: 'Password',
					type: 'password',
					placeholder: 'password',
				},
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) return null

				const { email, password } = credentials

				const response = await AuthService.login({
					email,
					password,
				})

				if (response.status == 401) {
					console.log(response.statusText)

					return null
				}

				return response.data
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				return { ...token, ...user }
			}

			if (new Date().getTime() < token.expiresIn) return token

			return refreshToken(token)
		},

		async session({ token, session }) {
			session.user = token.user
			session.accessToken = token.accessToken
			session.refreshToken = token.refreshToken
			session.expiresIn = token.expiresIn

			return session
		},
	},
	pages: {
		error: '/error',
	},
}

const auth = (
	...args:
		| [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
		| [NextApiRequest, NextApiResponse]
		| []
) => {
	return getServerSession(...args, authOptions)
}

export { authOptions, auth }
