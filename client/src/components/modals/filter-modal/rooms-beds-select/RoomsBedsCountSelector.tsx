import styles from './rooms-beds-select.module.scss'
import { FC } from 'react'
import Text from '@/components/ui/text/Text'
import RoomsBedsCountSelectorItem from './RoomsBedsCountSelectorItem'

const RoomsBedsCountSelector: FC<{
	value?: number
	title: string
	onChange: (value?: number) => void
}> = ({ value, title, onChange }) => {
	return (
		<div className={styles.select__container}>
			<Text>{title}</Text>
			<ul className={styles.list}>
				<RoomsBedsCountSelectorItem
					isActive={!value}
					onClick={() => onChange(undefined)}
				/>
				{[...Array(8)].map((_, i) => (
					<RoomsBedsCountSelectorItem
						isActive={value === i + 1}
						key={i}
						value={i + 1}
						onClick={() => onChange(i + 1)}
					/>
				))}
			</ul>
		</div>
	)
}

export default RoomsBedsCountSelector
