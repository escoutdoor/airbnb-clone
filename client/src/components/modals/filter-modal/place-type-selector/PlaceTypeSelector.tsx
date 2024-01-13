import styles from './place-type-selector.module.scss'
import { FC } from 'react'
import { ApartmentType } from '@/shared/interfaces/apartment.interface'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import SmallText from '@/components/ui/small-text/SmallText'
import PlaceTypeSelectorItem from './PlaceTypeSelectorItem'

type PlaceTypeSelectorProps = {
	value?: ApartmentType
	onChange: (value?: ApartmentType) => void
}

const PlaceTypeSelector: FC<PlaceTypeSelectorProps> = ({ value, onChange }) => {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<ParagraphHeading>Type of place</ParagraphHeading>
				<SmallText>
					Search rooms, entire homes, or any type of place.
				</SmallText>
			</div>
			<ul className={styles.list}>
				<PlaceTypeSelectorItem
					isActive={!value}
					name="Any type"
					onClick={() => onChange(undefined)}
				/>
				<PlaceTypeSelectorItem
					isActive={value === 'room'}
					name="Room"
					onClick={() => onChange('room')}
				/>
				<PlaceTypeSelectorItem
					isActive={value === 'entire home'}
					name="Entire home"
					onClick={() => onChange('entire home')}
				/>{' '}
			</ul>
		</section>
	)
}

export default PlaceTypeSelector
