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
import CreateReview from './create-review/CreateReview'
import { useLoadScript } from '@react-google-maps/api'

const Apartment: NextPage<{ apartment: IApartment }> = ({ apartment }) => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
		libraries: ['places'],
	})

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
							<Rating rating={apartment.rating || 0} />
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
				<CreateReview apartmentId={apartment.id} />
			</section>
			{isLoaded ? (
				<section>
					<ApartmentLocation location={apartment.location} />
				</section>
			) : null}
		</div>
	)
}

export default Apartment
