'use client'

import styles from './apartment-details.module.scss'
import { FC } from 'react'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { getOverviewTitle } from '@/utils/get-overview-title'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import Avatar from '@/components/ui/avatar/Avatar'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'
import Link from 'next/link'
import ApartmentDescription from './ApartmentDescription'
import ApartmentAmenities from './apartment-amenities/ApartmentAmenities'
import DatesRange from './dates-range/DatesRange'
import { useDatesRange } from '@/hooks/useDatesRange'
import Rating from '@/components/ui/rating/Rating'

const ApartmentDetails: FC<{ apartment: IApartment }> = ({ apartment }) => {
	const { checkIn, checkOut, daysDifference } = useDatesRange()

	return (
		<div className={styles.container}>
			<div className={styles.overview}>
				<ParagraphHeading>
					{getOverviewTitle(apartment)}
				</ParagraphHeading>
				<ol className={styles.list}>
					<li>{apartment.maxGuests} guests</li>
					<li>{`${apartment.bedrooms} bedroom${
						apartment.bedrooms > 1 ? 's' : ''
					}`}</li>
					<li>{`${apartment.beds} bed${apartment.beds > 1 ? 's' : ''}`}</li>
				</ol>
			</div>
			<div className={styles.rating__container}>
				<Rating rating={apartment.rating || 0} />
			</div>
			<div className={styles.renter}>
				<Avatar user={apartment.user} />
				<div className={styles.right}>
					<MediumHeading>
						Hosted by {apartment.user.firstName}
					</MediumHeading>
					<Link
						href={`tel:${apartment.user.phoneNumber}`}
						className={styles.link}
					>
						<p>{apartment.user.phoneNumber}</p>
					</Link>
				</div>
			</div>
			{apartment.description.length ? (
				<section>
					<ApartmentDescription description={apartment.description} />
				</section>
			) : null}
			<ApartmentAmenities amenities={apartment.amenities} />
			<section>
				<ParagraphHeading>
					{daysDifference
						? `${daysDifference} night${daysDifference > 1 ? 's' : ''} in ${apartment.location.city}`
						: checkIn
							? 'Select checkout date'
							: 'Select check-in date'}
				</ParagraphHeading>

				<DatesRange apartment={apartment} />
			</section>
		</div>
	)
}

export default ApartmentDetails
