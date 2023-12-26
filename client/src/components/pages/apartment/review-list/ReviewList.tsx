import styles from './review-list.module.scss'
import { FC } from 'react'
import { IReview } from '@/shared/interfaces/review.interface'
import ReviewItem from './ReviewItem'

const ReviewList: FC<{ reviews: IReview[] }> = ({ reviews }) => {
	return (
		<div className={styles.container}>
			<ul className={styles.list}>
				{reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</ul>
		</div>
	)
}

export default ReviewList
