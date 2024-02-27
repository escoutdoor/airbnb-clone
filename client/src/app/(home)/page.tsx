import FilterModal from '@/components/modals/filter-modal/FilterModal'
import Home from '@/components/pages/home/Home'
import { IApartmentFilterParams } from '@/services/apartment/apartment-params.interface'
import { ApartmentService } from '@/services/apartment/apartment.service'

export default async function HomePage({
	searchParams,
}: {
	searchParams?: IApartmentFilterParams
}) {
	const {
		data: { apartments },
	} = await ApartmentService.getAll({
		...searchParams,
	})

	return (
		<>
			<FilterModal searchParams={searchParams} />
			<Home apartments={apartments} />
		</>
	)
}
