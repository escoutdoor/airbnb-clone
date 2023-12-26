/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.API_URL,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'a0.muscache.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
		],
	},
}

module.exports = nextConfig
