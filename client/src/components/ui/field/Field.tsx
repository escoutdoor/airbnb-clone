'use client'

import styles from './field.module.scss'
import { forwardRef } from 'react'

interface IField
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label: string
	error?: string
}

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, label, error, ...rest }, ref) => {
		return (
			<div className={styles.container}>
				<input
					placeholder=""
					className={styles.field}
					ref={ref}
					{...rest}
				/>
				<label>Email</label>
			</div>
		)
	}
)

export default Field
