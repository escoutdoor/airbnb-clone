'use client'

import styles from './wishlist.module.scss'
import { NextPage } from 'next'
import { IWishlist } from '@/shared/interfaces/user.interface'
import WishlistMap from './wishlist-map/WishlistMap'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { RxDotsHorizontal } from 'react-icons/rx'
import { useRouter } from 'next/navigation'

const Wishlist: NextPage<{ wishlist: IWishlist }> = ({ wishlist }) => {
	const { push } = useRouter()

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.header}>
					<div className={styles.back}>
						<MdOutlineArrowBackIos
							className={styles.icon}
							onClick={() => push('/wishlists')}
						/>
					</div>
					<RxDotsHorizontal className={styles.dots__icon} />
				</div>
				<div className={styles.content}></div>
			</div>
			<WishlistMap />
		</div>
	)
}

export default Wishlist
