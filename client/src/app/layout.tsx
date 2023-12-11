import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.scss'
import Provider from '@/utils/provider'
import Layout from '@/components/layout/Layout'

const roboto = Roboto({
	variable: '--font-roboto',
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: [
		'cyrillic',
		'cyrillic-ext',
		'greek',
		'greek-ext',
		'latin',
		'latin-ext',
		'vietnamese',
	],
})

export const metadata: Metadata = {
	title: {
		template: '%s | Airbnb',
		default: 'Airbnb',
	},
	description: 'Airbnb clone',
	icons: {
		shortcut: '/icons/airbnb.ico',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Provider>
					<Layout>{children}</Layout>
				</Provider>
			</body>
		</html>
	)
}
