import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'
import styles from './place-type-selector.module.scss'
import { FC } from 'react'

type PlaceTypeSelectorItemProps = {
	name: string
	isActive: boolean
	onClick: () => void
}

const PlaceTypeSelectorItem: FC<PlaceTypeSelectorItemProps> = ({
	isActive,
	name,
	onClick,
}) => {
	return (
		<li
			className={
				isActive ? `${styles.item} ${styles.active}` : styles.item
			}
			onClick={onClick}
		>
			<MediumHeading>{name}</MediumHeading>
		</li>
	)
}

export default PlaceTypeSelectorItem
