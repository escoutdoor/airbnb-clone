import styles from './footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className="wrapper">
				<p className={styles.text}>
					Airbnb clone by Ivan Popov &copy; 2023 escoutdoor
				</p>
			</div>
		</div>
	)
}

export default Footer
