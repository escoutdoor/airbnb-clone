'use client'

import styles from './apartment.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { NextPage } from 'next'
import ApartmentCard from './apartment-card/ApartmentCard'
import ReservationWidget from './reservation-widget/ReservationWidget'

const Apartment: NextPage<{ apartment: IApartment }> = ({ apartment }) => {
	return (
		<div className={styles.page}>
			<ApartmentCard apartment={apartment} />

			<ReservationWidget apartment={apartment} />
		</div>
	)
}

export default Apartment
