'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const useCreateQuery = () => {
	const searchParams = useSearchParams()
	const { push } = useRouter()
	const pathname = usePathname()

	const createQuery = useCallback(
		({ name, value }: { name: string; value: string }) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			push(pathname + '?' + params.toString())
		},
		[searchParams]
	)

	return { createQuery }
}
