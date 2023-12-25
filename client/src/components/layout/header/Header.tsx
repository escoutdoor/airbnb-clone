'use client'

import styles from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './search-bar/SearchBar'
import Actions from './actions/Actions'
import { LayoutSize } from '../Layout'

const Header = ({
	isSearchPage,
	size,
}: {
	isSearchPage: boolean
	size: LayoutSize
}) => {
	return (
		<div className={styles.header}>
			<div className={`wrapper ${size !== 'large' ? size : ''}`}>
				<div className={styles.content}>
					<Link href={'/'}>
						<Image
							src={'/logo/airbnb.svg'}
							width={102}
							height={32}
							alt="logo airbnb.svg"
						/>
					</Link>
					{isSearchPage && <SearchBar />}
					<Actions />
				</div>
			</div>
		</div>
	)
}

export default Header
