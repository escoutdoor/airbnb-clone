'use client'

import FilterModal from '@/components/modals/filter-modal/FilterModal'
import Home from '@/components/pages/home/Home'
import { useFilterApartments } from '@/hooks/useFilterApartments'

export default function HomePage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined }
}) {
	const { apartments, isLoading, error, status } = useFilterApartments({
		...searchParams,
	})

	return (
		<>
			<FilterModal searchParams={searchParams} />
			<Home apartments={apartments || []} />
		</>
	)
}
