import styles from './place-type-select.module.scss'
import { FC } from 'react'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'

const PlaceTypeItem: FC<{
	title: string
	isActive: boolean
	onClick: () => void
}> = ({ title, isActive, onClick }) => {
	return (
		<li
			className={
				isActive ? `${styles.item} ${styles.active}` : styles.item
			}
			onClick={onClick}
		>
			<MediumHeading>{title}</MediumHeading>
		</li>
	)
}

export default PlaceTypeItem
