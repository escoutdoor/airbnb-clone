import styles from './header.module.scss'
import { LayoutSize } from '../Layout'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './search-bar/SearchBar'
import Actions from './actions/Actions'

const Header = ({ size = 'large' }: { size: LayoutSize }) => {
	return (
		<div className={styles.header}>
			<div className={`wrapper ${size !== 'large' ? styles[size] : ''}`}>
				<div className={styles.content}>
					<Link href={'/'}>
						<Image
							src={'/logo/airbnb.svg'}
							width={102}
							height={32}
							alt="logo airbnb.svg"
						/>
					</Link>
					<SearchBar />
					<Actions />
				</div>
			</div>
		</div>
	)
}

export default Header
