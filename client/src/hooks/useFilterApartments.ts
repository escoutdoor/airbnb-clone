'use client'

import { IApartmentFilterParams } from '@/services/apartment/apartment-params.interface'
import { ApartmentService } from '@/services/apartment/apartment.service'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from './useDebounce'

export const useFilterApartments = (params: IApartmentFilterParams) => {
	const debouncedParams = useDebounce(params, 200)

	const { data, isLoading, error, isError, isFetched, isFetching, status } =
		useQuery({
			queryKey: ['apartments', debouncedParams],
			queryFn: () => ApartmentService.getAll(debouncedParams),
			select: ({ data }) => data,
		})

	return {
		apartments: data?.apartments,
		total: data?.total,
		isLoading,
		error,
		isError,
		isFetched,
		isFetching,
		status,
	}
}
