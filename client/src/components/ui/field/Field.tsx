'use client'

import ErrorText from './error-text/ErrorText'
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
			<>
				<div className={styles.field}>
					<input
						placeholder=""
						className={styles.input}
						ref={ref}
						{...rest}
					/>
					<label className={styles.label}>{label}</label>
				</div>
				{error && <ErrorText>{error}</ErrorText>}
			</>
		)
	}
)

export default Field
