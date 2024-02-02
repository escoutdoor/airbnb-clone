'use client'

import styles from './apartment.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { NextPage } from 'next'
import ApartmentCard from './apartment-card/ApartmentCard'
import ReservationWidget from './reservation-widget/ReservationWidget'
import ApartmentDetails from './apartment-details/ApartmentDetails'
import ApartmentLocation from './apartment-location/ApartmentLocation'
import ReviewList from './review-list/ReviewList'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import Rating from '@/components/ui/rating/Rating'

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
			<section className={styles.reviews}>
				<div className={styles.header}>
					{apartment.reviews.length ? (
						<>
							<Rating rating={4.75} />
							<ParagraphHeading>
								{' · '}
								{apartment.reviews.length} review
								{apartment.reviews.length > 1 ? 's' : ''}
							</ParagraphHeading>
						</>
					) : (
						<ParagraphHeading>No reviews</ParagraphHeading>
					)}
				</div>
				<ReviewList reviews={apartment.reviews} />
			</section>
			<section>
				<ApartmentLocation location={apartment.location} />
			</section>
		</div>
	)
}

export default Apartment
