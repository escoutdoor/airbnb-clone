'use client'

import Home from '@/components/pages/home/Home'
import { useFilterApartments } from '@/hooks/useFilterApartments'

export default function HomePage() {
	const { apartments, isLoading } = useFilterApartments({})

	return <Home apartments={apartments || []} />
}
