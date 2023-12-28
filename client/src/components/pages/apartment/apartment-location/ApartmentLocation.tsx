import styles from './apartment-location.module.scss'
import { FC } from 'react'
import { IApartmentLocation } from '@/shared/interfaces/apartment.interface'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'

const ApartmentLocation: FC<{ location: IApartmentLocation }> = ({
	location,
}) => {
	return (
		<div className={styles.container}>
			<ParagraphHeading>Where you’ll be</ParagraphHeading>
		</div>
	)
}

export default ApartmentLocation
