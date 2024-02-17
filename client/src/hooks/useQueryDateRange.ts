'use client'

import { useSearchParams } from 'next/navigation'
import { useCreateQuery } from './useCreateQuery'
import { isValid } from 'date-fns'

export const useQueryDateRange = () => {
	const { get } = useSearchParams()
	const { removeQuery } = useCreateQuery()

	const checkInDate = get('check_in')
	const checkOutDate = get('check_out')

	const validate = (value: any) => {}
}
