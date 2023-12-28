'use client'

import ModalContainer from '../modal-container/ModalContainer'
import styles from './wishlist-modal.module.scss'
import { FC } from 'react'
import { useWishListModal } from '@/hooks/useWishListModal'

const WishlistModal: FC = () => {
	const { isActive, close } = useWishListModal()

	return (
		<ModalContainer
			close={close}
			title="Add to wishlist"
			isActive={isActive}
		>
			WISHLIST MODAL
		</ModalContainer>
	)
}

export default WishlistModal
