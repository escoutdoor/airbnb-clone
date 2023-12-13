import './globals.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { CategoryService } from '@/services/category/category.service'
import Provider from '@/utils/provider'
import Layout from '@/components/layout/Layout'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

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

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const { data: categories } = await CategoryService.getAll()

	return (
		<html lang="en">
			<body className={roboto.className}>
				<Provider>
					<Layout categories={categories}>{children}</Layout>
				</Provider>
			</body>
		</html>
	)
}
