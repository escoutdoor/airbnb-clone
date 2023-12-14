import { ApartmentService } from '@/services/apartment/apartment.service'
import { useQuery } from '@tanstack/react-query'

export const useApartment = (id: string) => {
	const {
		data: apartment,
		isLoading,
		isError,
		refetch,
		status,
	} = useQuery({
		queryKey: ['apartment', id],
		queryFn: async () => await ApartmentService.getById(id),
		enabled: !!id,
		select: ({ data }) => data,
	})

	return {
		apartment,
		isLoading,
		isError,
		status,
		refetch,
	}
}
