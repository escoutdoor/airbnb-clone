'use client'

import Apartment from '@/components/pages/apartment/Apartment'
import { useApartment } from '@/hooks/useApartment'

export default function ApartmentPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const { apartment } = useApartment(id)

	if (apartment) {
		return <Apartment apartment={apartment} />
	}
}
