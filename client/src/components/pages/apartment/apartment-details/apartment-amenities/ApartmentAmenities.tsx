import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import styles from './apartment-amenities.module.scss'
import { FC } from 'react'
import Text from '@/components/ui/text/Text'
import { BiRadioCircleMarked } from 'react-icons/bi'

const ApartmentAmenities: FC<{ amenities: string[] }> = ({ amenities }) => {
	return (
		<div className={styles.container}>
			<ParagraphHeading>What this place offers</ParagraphHeading>
			<ul className={styles.list}>
				{amenities.map(amenity => (
					<li key={amenity} className={styles.item}>
						<BiRadioCircleMarked className={styles.icon} />
						<Text>{amenity}</Text>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ApartmentAmenities
