import Wishlist from '@/components/pages/wishlist/Wishlist'
import { WishlistService } from '@/services/wishlist/wishlist.service'

export default async function WishlistPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const { data: wishlist } = await WishlistService.getById(id)

	return <Wishlist wishlist={wishlist} />
}
