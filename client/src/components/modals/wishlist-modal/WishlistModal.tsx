'use client'

import ModalContainer from '../modal-container/ModalContainer'
import styles from './wishlist-modal.module.scss'
import { FC } from 'react'
import { useWishListModal } from '@/hooks/useWishListModal'
import WishlistItem from '@/components/ui/wishlist-item/WishlistItem'
import { useProfile } from '@/hooks/useProfile'

const WishlistModal: FC = () => {
	const { isActive, close } = useWishListModal()
	const { profile } = useProfile()

	return (
		<ModalContainer
			close={close}
			title="Add to wishlist"
			isActive={isActive}
			modalName="wishlist"
		>
			<ul className={styles.list}>
				{profile?.wishlists.map(wishlist => (
					<WishlistItem
						key={wishlist.id}
						item={wishlist}
						handleDelete={() => {}}
					/>
				))}
			</ul>
		</ModalContainer>
	)
}

export default WishlistModal
