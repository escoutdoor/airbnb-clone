import { ReactNode } from 'react'
import { Metadata } from 'next'
import { WishlistService } from '@/services/wishlist/wishlist.service'
import WishlistSettingsModal from '@/components/modals/wishlist-settings-modal/WishlistSettingsModal'

interface Params {
	id: string
}

export const generateMetadata = async (params: {
	params: Params
}): Promise<Metadata> => {
	const {
		params: { id },
	} = params
	const { data: wishlist } = await WishlistService.getById(id)

	return {
		title: `${wishlist.name} - Wishlists`,
	}
}

export default function WishlistLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
			<WishlistSettingsModal />
		</>
	)
}
