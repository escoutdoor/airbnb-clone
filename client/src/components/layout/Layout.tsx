'use client'

import styles from './layout.module.scss'
import { FC, ReactNode } from 'react'
import { ICategory } from '@/shared/interfaces/category.interface'
import Footer from './footer/Footer'
import Header from './header/Header'
import FilterBar from './filter-bar/FilterBar'

interface ILayout {
	children: ReactNode
	categories?: ICategory[]
	isSearchPage?: boolean
	size?: LayoutSize
}

export type LayoutSize = 'small' | 'medium' | 'large'

const Layout: FC<ILayout> = ({
	children,
	categories,
	isSearchPage = false,
	size = 'large',
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<Header size={size} isSearchPage={isSearchPage} />
				{isSearchPage ? (
					<FilterBar categories={categories || []} />
				) : null}
			</div>

			<main>
				<div className={`wrapper ${size !== 'large' ? size : ''}`}>
					<div className={styles.content}>{children}</div>
				</div>
			</main>
			<Footer size={size} />
		</div>
	)
}

export default Layout
