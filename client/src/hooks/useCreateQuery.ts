'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export const useCreateQuery = () => {
	const searchParams = useSearchParams()
	const { push } = useRouter()
	const pathname = usePathname()

	const createQuery = useCallback(
		({
			name,
			value,
			isArray = false,
		}: {
			name: string
			value?: string
			isArray?: boolean
		}) => {
			const params = new URLSearchParams(searchParams)

			if (!value) {
				params.delete(name)
				return pathname + '?' + params.toString()
			}

			if (isArray) {
				const array = searchParams.getAll(name)
				const isExists = array.some(item => item === value)

				if (isExists) {
					const indexToRemove = array.indexOf(value)
					array.splice(indexToRemove, 1)
					params.delete(name)
					array.forEach(item => params.append(name, item))
				} else {
					params.append(name, value)
				}
			} else {
				if (value) {
					params.set(name, value)
				} else {
					params.delete(name)
				}
			}

			return pathname + '?' + params.toString()
		},
		[searchParams]
	)

	const removeQuery = useCallback(
		({ name }: { name: string }) => {
			const params = new URLSearchParams(searchParams)
			params.delete(name)

			return pathname + '?' + params.toString()
		},
		[searchParams]
	)

	return { createQuery, removeQuery }
}
