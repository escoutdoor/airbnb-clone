'use client'

import styles from './layout.module.scss'
import { FC, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { ICategory } from '@/shared/interfaces/category.interface'
import Footer from './footer/Footer'
import Header from './header/Header'
import CategoryList from '../ui/category-list/CategoryList'

interface ILayout {
	children: ReactNode
	categories: ICategory[]
}

const Layout: FC<ILayout> = ({ children, categories }) => {
	const pathname = usePathname()

	const isSearchPage = pathname.includes('/search') || pathname === '/'

	return (
		<div className={styles.layout}>
			<div className={styles.navbar}>
				<Header isSearchPage={isSearchPage} />
				{isSearchPage ? <CategoryList categories={categories} /> : null}
			</div>

			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
