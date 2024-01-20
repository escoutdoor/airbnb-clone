import { withAuth } from 'next-auth/middleware'

export default withAuth(function middleware(req) {}, {
	callbacks: {
		authorized: ({ token }) => !!token,
	},
	pages: {
		signIn: '/',
	},
})

export const config = {
	match: ['/users/:path*', '/wishlists'],
}
