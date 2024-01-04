'use client'

import { IApartmentFilterParams } from '@/services/apartment/apartment-params.interface'
import { ApartmentService } from '@/services/apartment/apartment.service'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from './useDebounce'

export const useFilterApartments = (data: IApartmentFilterParams) => {
	// const data = useDebounce(params, 300)

	const { data: apartments, isLoading } = useQuery({
		queryKey: ['apartments', data],
		queryFn: () => ApartmentService.getAll(data),
		select: ({ data }) => data,
	})

	return {
		apartments,
		isLoading,
	}
}
