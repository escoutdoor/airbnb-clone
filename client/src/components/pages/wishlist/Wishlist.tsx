import styles from './wishlist.module.scss'
import { NextPage } from 'next'
import { IWishlist } from '@/shared/interfaces/user.interface'
import WishlistMap from './wishlist-map/WishlistMap'

const Wishlist: NextPage<{ wishlist: IWishlist }> = ({ wishlist }) => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>INFO</div>
			<WishlistMap />
		</div>
	)
}

export default Wishlist
