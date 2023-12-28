import Layout from '@/components/layout/Layout'
import FilterModal from '@/components/modals/filter-modal/FilterModal'
import { CategoryService } from '@/services/category/category.service'
import { ReactNode } from 'react'

export default async function HomeLayout({
	children,
}: {
	children: ReactNode
}) {
	const { data: categories } = await CategoryService.getAll()

	return (
		<>
			<FilterModal />
			<Layout isSearchPage categories={categories}>
				{children}
			</Layout>
		</>
	)
}
