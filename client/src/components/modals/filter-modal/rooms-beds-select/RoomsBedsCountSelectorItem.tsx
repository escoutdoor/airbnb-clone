import styles from './rooms-beds-select.module.scss'
import { FC } from 'react'
import SmallText from '@/components/ui/small-text/SmallText'

const RoomsBedsCountSelectorItem: FC<{
	value?: number
	isActive: boolean
	isLastItem?: boolean
	onClick: () => void
}> = ({ value, isActive, onClick, isLastItem = false }) => {
	return (
		<li
			onClick={onClick}
			className={
				isActive ? `${styles.item} ${styles.active}` : styles.item
			}
		>
			<SmallText>
				{isLastItem ? value + '+' : value ? value : 'Any'}
			</SmallText>
		</li>
	)
}

export default RoomsBedsCountSelectorItem
