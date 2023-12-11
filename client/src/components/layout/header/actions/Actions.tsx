import styles from './actions.module.scss'
import { FC } from 'react'
import Link from 'next/link'
import Text from '@/components/ui/text/Text'
import HeaderNavigation from './header-navigation/HeaderNavigation'

const Actions: FC = () => {
	return (
		<div className={styles.actions}>
			<Link href={'/host/homes'} className={styles.link}>
				<Text>Airbnb your home</Text>
			</Link>
			<HeaderNavigation />
		</div>
	)
}

export default Actions
