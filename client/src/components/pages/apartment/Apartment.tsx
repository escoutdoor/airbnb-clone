'use client'

import styles from './apartment.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { NextPage } from 'next'
import ApartmentCard from './apartment-card/ApartmentCard'
import ReservationWidget from './reservation-widget/ReservationWidget'
import ApartmentDetails from './apartment-details/ApartmentDetails'
import ApartmentLocation from './apartment-location/ApartmentLocation'
import ReviewList from './review-list/ReviewList'

const Apartment: NextPage<{ apartment: IApartment }> = ({ apartment }) => {
	return (
		<div className={styles.page}>
			<ApartmentCard apartment={apartment} />
			<div className={styles.container}>
				<ApartmentDetails apartment={apartment} />
				<div className={styles.sidebar}>
					<ReservationWidget apartment={apartment} />
				</div>
			</div>
			<section>
				<ReviewList reviews={apartment.reviews} />
			</section>
			<section>
				<ApartmentLocation location={apartment.location} />
			</section>
		</div>
	)
}

export default Apartment
