'use client'

import styles from './apartment-item.module.scss'
import { FC } from 'react'
import { IApartmentItem } from '@/shared/interfaces/apartment.interface'
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { useWishListModal } from '@/hooks/useWishListModal'
import { useProfile } from '@/hooks/useProfile'
import { getLocationTitle } from '@/utils/get-location-title'
import { useAuthModal } from '@/hooks/useAuthModal'
import Text from '../../text/Text'
import Rating from '../../rating/Rating'
import SmallText from '../../small-text/SmallText'
import Link from 'next/link'
import ImageCarousel from '../../image-carousel/ImageCarousel'

const ApartmentItem: FC<{ item: IApartmentItem }> = ({ item }) => {
	const { open } = useWishListModal()
	const { open: openAuthModal } = useAuthModal()
	const { profile } = useProfile()

	const isWishListed = profile?.wishlists?.some(wishlist =>
		wishlist.apartments.some(apartment => apartment.id === item.id),
	)

	const handleWishListClick = () => {
		if (!profile) {
			openAuthModal('login')
			return
		}

		open(item.id)
	}

	return (
		<div className={styles.item}>
			<Link href={`/apartments/${item.id}`}>
				<button
					onClick={e => {
						e.preventDefault()
						handleWishListClick()
					}}
					className={styles.wishlist__button}
				>
					{isWishListed ? (
						<IoMdHeart
							className={`${styles.icon} ${styles.active}`}
						/>
					) : (
						<IoMdHeartEmpty className={styles.icon} />
					)}
				</button>
				<ImageCarousel images={item.images} />
				<div className={styles.card}>
					<div className={styles.text}>
						<Text>{getLocationTitle(item.location)}</Text>
						<div className={styles.price}>
							<Text>${item.price}</Text>{' '}
							<SmallText>night</SmallText>
						</div>
					</div>
					<Rating rating={4.75} />
				</div>
			</Link>
		</div>
	)
}

export default ApartmentItem
