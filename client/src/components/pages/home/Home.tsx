'use client'

import ApartmentList from '@/components/ui/apartment-list/ApartmentList'
import styles from './home.module.scss'
import { NextPage } from 'next'
import { IApartmentItem } from '@/shared/interfaces/apartment.interface'

const Home: NextPage<{ apartments: IApartmentItem[] }> = ({ apartments }) => {
	return (
		<div className={styles.page}>
			<div className="wrapper">
				<div className={styles.content}>
					<ApartmentList apartments={apartments} />
				</div>
			</div>
		</div>
	)
}

export default Home
