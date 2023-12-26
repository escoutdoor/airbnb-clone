import './globals.scss'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Provider from '@/utils/provider'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const nunito = Nunito({
	variable: '--font-nunito',
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext', 'vietnamese'],
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

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
