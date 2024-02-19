'use client'

import { isValid } from 'date-fns'
import { notFound, useSearchParams } from 'next/navigation'

export const useDatesRange = () => {
	const { get } = useSearchParams()

	const checkIn = get('check_in')
	const checkOut = get('check_out')

	const validate = (val: any) => {
		if (!val) return

		const isDate = isValid(new Date(val))

		if (!isDate) {
			notFound()
		}

		return new Date(val)
	}

	return {
		checkIn: validate(checkIn),
		checkOut: validate(checkOut),
	}
}
