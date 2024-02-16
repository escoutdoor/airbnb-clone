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
import DatesSelection from '@/components/ui/dates-selection/DatesSelection'
import ApartmentAmenities from './apartment-amenities/ApartmentAmenities'

const ApartmentDetails: FC<{ apartment: IApartment }> = ({ apartment }) => {
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
					NIGHTS_QUANTITY nights in {apartment.location.city}
				</ParagraphHeading>

				<DatesSelection apartment={apartment} />
			</section>
		</div>
	)
}

export default ApartmentDetails
