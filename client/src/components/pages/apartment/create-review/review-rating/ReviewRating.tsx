'use client'

import { FC } from 'react'
import styles from './review-rating.module.scss'
import { Rating, ThinRoundedStar } from '@smastrom/react-rating'
import ErrorText from '@/components/ui/field/error-text/ErrorText'

type ReviewRatingProps = {
	handleChange?: (value: number) => void
	value: number
	error?: string
	isReadOnly?: boolean
	size?: 'sm' | 'md'
}

const ReviewRating: FC<ReviewRatingProps> = ({
	value,
	handleChange,
	error,
	isReadOnly = false,
	size = 'md',
}) => {
	const myStyles = {
		itemShapes: ThinRoundedStar,
		activeFillColor: '#222222',
		inactiveFillColor: '#717171',
	}

	return (
		<div className={styles.container}>
			<div
				className={
					size === 'sm'
						? `${styles.rating__wrapper} ${styles.sm}`
						: styles.rating__wrapper
				}
			>
				<Rating
					value={value || 0}
					onChange={handleChange}
					itemStyles={myStyles}
					className={styles.rating}
					halfFillMode="svg"
					readOnly={isReadOnly}
				/>
			</div>
			{error && (
				<div className={styles.error__wrapper}>
					<ErrorText>{error}</ErrorText>
				</div>
			)}
		</div>
	)
}

export default ReviewRating
