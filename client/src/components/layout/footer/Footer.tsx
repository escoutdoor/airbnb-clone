'use client'

import { LayoutSize } from '../Layout'
import styles from './footer.module.scss'

const Footer = ({ size }: { size: LayoutSize }) => {
	return (
		<div className={styles.footer}>
			<div className={`wrapper ${size !== 'large' ? size : ''}`}>
				<p className={styles.text}>
					Airbnb clone by Ivan Popov &copy; 2024 escoutdoor
				</p>
			</div>
		</div>
	)
}

export default Footer
