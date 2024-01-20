'use client'

import FilterModal from '@/components/modals/filter-modal/FilterModal'
import Home from '@/components/pages/home/Home'
import { useFilterApartments } from '@/hooks/useFilterApartments'
import { IApartmentFilterParams } from '@/services/apartment/apartment-params.interface'

export default function HomePage({
	searchParams,
}: {
	searchParams?: IApartmentFilterParams
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
