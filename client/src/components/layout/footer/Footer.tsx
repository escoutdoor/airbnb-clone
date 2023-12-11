import styles from './footer.module.scss'
import { LayoutSize } from '../Layout'

const Footer = ({ size = 'large' }: { size: LayoutSize }) => {
	return (
		<div className={styles.footer}>
			<div className={`wrapper ${size !== 'large' ? styles[size] : ''}`}>
				<p className={styles.text}>
					Airbnb clone by Ivan Popov &copy; 2023 escoutdoor
				</p>
			</div>
		</div>
	)
}

export default Footer
