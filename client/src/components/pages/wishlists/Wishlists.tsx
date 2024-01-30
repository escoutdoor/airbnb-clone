'use client'

import { useProfile } from '@/hooks/useProfile'
import styles from './wishlists.module.scss'
import { NextPage } from 'next'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import UserWishlistItem from './user-wishlist-item/UserWishlistItem'
import { useDeleteWishlist } from '@/hooks/useDeleteWishlist'

const Wishlists: NextPage = () => {
	const { deleteWishlist, isPending, error } = useDeleteWishlist()
	const { profile } = useProfile()

	return (
		<div className={styles.container}>
			<ParagraphHeading>Wishlists</ParagraphHeading>
			<ul className={styles.list}>
				{profile?.wishlists.map(item => (
					<UserWishlistItem
						item={item}
						key={item.id}
						href={`/wishlists/${item.id}`}
						onDelete={() => deleteWishlist(item.id)}
					/>
				))}
			</ul>
		</div>
	)
}

export default Wishlists
