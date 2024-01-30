import { ReactNode } from 'react'
import { Metadata } from 'next'
import Layout from '@/components/layout/Layout'

export const metadata: Metadata = {
	title: {
		absolute: 'Your lists - Wishlists',
	},
}

export default function WishlistsLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<Layout size="large">{children}</Layout>
		</>
	)
}
