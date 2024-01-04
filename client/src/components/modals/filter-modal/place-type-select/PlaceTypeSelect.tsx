import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import styles from './place-type-select.module.scss'
import { FC } from 'react'
import SmallText from '@/components/ui/small-text/SmallText'
import { ApartmentType } from '@/shared/interfaces/apartment.interface'
import PlaceTypeItem from './PlaceTypeItem'

const PlaceTypeSelect: FC<{
	value: ApartmentType | undefined
	onChange: (type?: ApartmentType) => void
}> = ({ value, onChange }) => {
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<ParagraphHeading>Type of place</ParagraphHeading>
				<SmallText>
					Search rooms, entire homes, or any type of place.
				</SmallText>
			</div>
			<ul className={styles.list}>
				<PlaceTypeItem
					isActive={!value}
					title="Any type"
					onClick={() => onChange(undefined)}
				/>
				<PlaceTypeItem
					isActive={value === 'room'}
					title="Room"
					onClick={() => onChange('room')}
				/>
				<PlaceTypeItem
					isActive={value === 'entire home'}
					title="Entire home"
					onClick={() => onChange('entire home')}
				/>
			</ul>
		</section>
	)
}

export default PlaceTypeSelect
