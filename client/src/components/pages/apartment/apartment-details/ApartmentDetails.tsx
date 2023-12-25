import styles from './apartment-details.module.scss'
import { FC } from 'react'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import { getOverviewTitle } from '@/utils/get-overview-title'

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
					<li>{`${apartment.beds} bed${
						apartment.beds > 1 ? 's' : ''
					}`}</li>
				</ol>
			</div>
		</div>
	)
}

export default ApartmentDetails
