import Layout from '@/components/layout/Layout'
import { ReactNode } from 'react'
import { Metadata } from 'next'
import { ApartmentService } from '@/services/apartment/apartment.service'

interface Params {
	id: string
}

export const generateMetadata = async (params: {
	params: Params
}): Promise<Metadata> => {
	const {
		params: { id },
	} = params
	const { data: apartment } = await ApartmentService.getById(id)

	return {
		title: apartment.name,
		description: apartment?.description[0],
	}
}

export default function ApartmentLayout({ children }: { children: ReactNode }) {
	return <Layout size="medium">{children}</Layout>
}
