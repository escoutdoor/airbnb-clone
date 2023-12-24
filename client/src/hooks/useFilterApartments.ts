'use client'

import { IApartmentFilterParams } from '@/services/apartment/apartment-params.interface'
import { ApartmentService } from '@/services/apartment/apartment.service'
import { useQuery } from '@tanstack/react-query'

export const useFilterApartments = (data: IApartmentFilterParams) => {
	const { data: apartments, isLoading } = useQuery({
		queryKey: ['apartments'],
		queryFn: () => ApartmentService.getAll(data),
		select: ({ data }) => data,
	})

	return {
		apartments,
		isLoading,
	}
}
