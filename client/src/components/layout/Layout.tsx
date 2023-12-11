import styles from './layout.module.scss'
import { FC, ReactNode } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

export type LayoutSize = 'large' | 'medium' | 'small'

const Layout: FC<{ children: ReactNode; size?: LayoutSize }> = ({
	children,
	size = 'large',
}) => {
	return (
		<div className={styles.layout}>
			<Header size={size} />
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
