import styles from './user-wishlist-item.module.scss'
import { FC } from 'react'
import { IWishlist } from '@/shared/interfaces/user.interface'
import Link from 'next/link'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'
import SmallText from '@/components/ui/small-text/SmallText'
import Image from 'next/image'
import { WISHLIST_PREVIEW } from '@/components/ui/wishlist-item/WishlistItem'
import { IoClose } from 'react-icons/io5'

type UserWishlistItemProps = {
	item: IWishlist
	onDelete: () => void
	href: string
}

const UserWishlistItem: FC<UserWishlistItemProps> = ({
	item,
	onDelete,
	href,
}) => {
	const previewImage = item.apartments.length
		? item?.apartments?.[0].images?.[1]
		: WISHLIST_PREVIEW

	return (
		<div className={styles.wrapper}>
			<button className={styles.button} onClick={onDelete}>
				<IoClose className={styles.icon} />
			</button>
			<Link href={href} className={styles.link}>
				<div className={styles.preview}>
					<Image
						width={292}
						height={277}
						src={previewImage}
						alt={previewImage + item.name + 'image'}
						className={styles.image}
					/>
				</div>
				<div className={styles.details}>
					<MediumHeading>{item.name}</MediumHeading>
					<SmallText>{item.apartments.length} saved</SmallText>
				</div>
			</Link>
		</div>
	)
}

export default UserWishlistItem
