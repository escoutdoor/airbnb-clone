'use client'

import ModalContainer from '../modal-container/ModalContainer'
import styles from './wishlist-modal.module.scss'
import { FC } from 'react'
import { useWishListModal } from '@/hooks/useWishListModal'
import WishlistItem from '@/components/ui/wishlist-item/WishlistItem'

const WishlistModal: FC = () => {
	const { isActive, close } = useWishListModal()

	return (
		<ModalContainer
			close={close}
			title="Add to wishlist"
			isActive={isActive}
			modalName="wishlist"
		>
			<ul className={styles.list}>
				<WishlistItem
					item={{
						id: '1',
						name: 'name',
						apartments: [
							{
								id: '1',
								description: ['description'],
								images: [
									'https://a0.muscache.com/im/pictures/miso/Hosting-51801651/original/3f5fbe57-6615-452c-927e-6bfacc6239e0.jpeg',
									'https://a0.muscache.com/im/pictures/miso/Hosting-51801651/original/183e4e0a-ba5e-4a98-b45d-94b20db00748.jpeg',
									'https://a0.muscache.com/im/pictures/miso/Hosting-51801651/original/794e6291-afa7-4d0d-94e4-040d2b2db885.jpeg',
								],
								location: {
									id: '1',
									city: 'city',
									street: 'street',
									houseNumber: 321,
									country: 'country',
									latitude: 123,
									longitude: 321,
									apartmentNumber: 123,
								},
								name: 'name',
								price: 123,
								bathrooms: 1,
								bedrooms: 1,
								beds: 1,
								maxGuests: 1,
								hostLanguages: ['en'],
								type: 'room',
							},
						],
						userId: '1',
					}}
				/>
			</ul>
		</ModalContainer>
	)
}

export default WishlistModal
