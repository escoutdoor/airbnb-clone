'use client'

import Home from '@/components/pages/home/Home'
import { useFilterApartments } from '@/hooks/useFilterApartments'

export default function HomePage({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined }
}) {
	const { apartments, isLoading } = useFilterApartments({
		...searchParams,
	})

	return <Home apartments={apartments || []} />
}
