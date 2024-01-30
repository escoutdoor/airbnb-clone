'use client'

import Wishlist from '@/components/pages/wishlist/Wishlist'
import { useWishlist } from '@/hooks/useWishlist'

export default function WishlistPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const { wishlist, error, isError, isLoading, status, isFetching } =
		useWishlist(id)

	if (wishlist) {
		return <Wishlist wishlist={wishlist} />
	}
}
