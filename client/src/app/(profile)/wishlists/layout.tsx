import { ReactNode } from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Your lists - Wishlists',
}

export default function WishlistsLayout({ children }: { children: ReactNode }) {
	return <>{children}</>
}
