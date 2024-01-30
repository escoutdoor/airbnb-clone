import styles from './wishlist-item.module.scss'
import { FC } from 'react'
import { IWishlist } from '@/shared/interfaces/user.interface'
import MediumHeading from '../headings/medium-heading/MediumHeading'
import SmallText from '../small-text/SmallText'
import Image from 'next/image'

interface IWishlistItem {
	item: IWishlist
	onClick?: () => void
}

export const WISHLIST_PREVIEW = '/images/apartments/wishlist-preview.jpg'

const WishlistItem: FC<IWishlistItem> = ({ onClick, item }) => {
	const previewImage = item.apartments.length
		? item?.apartments?.[0].images?.[1]
		: WISHLIST_PREVIEW

	return (
		<li className={styles.item} onClick={onClick}>
			<div className={styles.preview}>
				<Image
					width={270}
					height={221}
					src={previewImage}
					alt={previewImage + item.name + 'image'}
					className={styles.image}
				/>
			</div>
			<div className={styles.info}>
				<MediumHeading>{item.name}</MediumHeading>
				<SmallText>{item.apartments.length} saved</SmallText>
			</div>
		</li>
	)
}

export default WishlistItem
