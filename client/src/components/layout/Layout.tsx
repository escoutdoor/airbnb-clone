'use client'

import styles from './layout.module.scss'
import { FC, ReactNode } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import { ICategory } from '@/shared/interfaces/category.interface'

export type LayoutSize = 'large' | 'medium' | 'small'

interface ILayout {
	size?: LayoutSize
	children: ReactNode
}

const Layout: FC<ILayout> = ({ children, size = 'large' }) => {
	return (
		<div className={styles.layout}>
			<div className={styles.navbar}>
				<Header size={size} />
			</div>

			<main>
				<div
					className={`wrapper ${
						size !== 'large' ? styles[size] : ''
					}`}
				>
					{children}
				</div>
			</main>
			<Footer size={size} />
		</div>
	)
}

export default Layout
