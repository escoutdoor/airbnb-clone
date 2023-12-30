import styles from './wishlist-item.module.scss'
import { FC } from 'react'
import { Wishlist } from '@/shared/interfaces/user.interface'
import MediumHeading from '../headings/medium-heading/MediumHeading'
import SmallText from '../small-text/SmallText'
import Image from 'next/image'

interface IWishlistItem {
	item: Wishlist
	handleDelete?: () => void
}

const WishlistItem: FC<IWishlistItem> = ({ handleDelete, item }) => {
	const previewImage = item?.apartments?.[0].images?.[0]

	return (
		<li className={styles.item}>
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
