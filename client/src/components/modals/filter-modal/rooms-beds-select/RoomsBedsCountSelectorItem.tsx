import styles from './rooms-beds-select.module.scss'
import { FC } from 'react'
import SmallText from '@/components/ui/small-text/SmallText'

const RoomsBedsCountSelectorItem: FC<{
	value?: number
	isActive: boolean
	onClick: () => void
}> = ({ value, isActive, onClick }) => {
	return (
		<li
			onClick={onClick}
			className={
				isActive ? `${styles.item} ${styles.active}` : styles.item
			}
		>
			<SmallText>
				{value === 8 ? value + '+' : value ? value : 'Any'}
			</SmallText>
		</li>
	)
}

export default RoomsBedsCountSelectorItem
