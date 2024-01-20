'use client'

import styles from './checkbox.module.scss'
import { FC } from 'react'
import { FaCheck } from 'react-icons/fa6'
import Text from '../text/Text'

type CheckboxProps = {
	isActive: boolean
	onClick: () => void
	label: string
}

const Checkbox: FC<CheckboxProps> = ({ label, onClick, isActive }) => {
	return (
		<div className={styles.container}>
			<div
				className={
					isActive
						? `${styles.checkbox} ${styles.active}`
						: styles.checkbox
				}
			>
				<input
					type="checkbox"
					checked={isActive}
					className={styles.input}
					onChange={onClick}
				/>
				<FaCheck className={styles.icon} />
			</div>
			<label className={styles.label}>
				<Text>{label}</Text>
			</label>
		</div>
	)
}

export default Checkbox
