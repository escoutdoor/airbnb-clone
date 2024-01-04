import styles from './checkbox.module.scss'
import { FC } from 'react'
import { FaCheck } from 'react-icons/fa6'
import Text from '../text/Text'

type CheckboxProps = {
	isActive: boolean
	onClick: () => void
	title: string
}

const Checkbox: FC<CheckboxProps> = ({ title, onClick, isActive }) => {
	return (
		<div className={styles.container} onClick={onClick}>
			<div
				className={
					isActive ? `${styles.field} ${styles.active}` : styles.field
				}
			>
				<input type="checkbox" className={styles.input} />
				<FaCheck className={styles.icon} />
			</div>
			<label>
				<Text>{title}</Text>
			</label>
		</div>
	)
}

export default Checkbox
