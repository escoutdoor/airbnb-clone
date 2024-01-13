'use client'

import DescriptionModal from '@/components/modals/description-modal/DescriptionModal'
import Apartment from '@/components/pages/apartment/Apartment'
import { useApartment } from '@/hooks/useApartment'

export default function ApartmentPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const { apartment, isError, isLoading } = useApartment(id)

	if (apartment)
		return (
			<>
				<DescriptionModal description={apartment.description} />
				<Apartment apartment={apartment} />
			</>
		)
}
