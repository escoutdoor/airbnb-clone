import Layout from '@/components/layout/Layout'
import { CategoryService } from '@/services/category/category.service'
import { ReactNode } from 'react'

export default async function HomeLayout({
	children,
}: {
	children: ReactNode
}) {
	const { data: categories } = await CategoryService.getAll()

	return (
		<Layout isSearchPage categories={categories}>
			{children}
		</Layout>
	)
}
