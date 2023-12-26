import styles from './review-list.module.scss'
import { FC } from 'react'
import { IReview } from '@/shared/interfaces/review.interface'
import Avatar from '@/components/ui/avatar/Avatar'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'
import { getName } from '@/utils/get-name'
import { DateTime } from 'luxon'
import SmallText from '@/components/ui/small-text/SmallText'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<li className={styles.item}>
			<div className={styles.header}>
				<Avatar user={review.user} />
				<div className={styles.right}>
					<MediumHeading>{getName(review.user)}</MediumHeading>
					<SmallText>
						{DateTime.now().toLocaleString(
							{ hour: '2-digit' },
							{ locale: 'ru' }
						)}
					</SmallText>
				</div>
			</div>
			<div className={styles.content}></div>
		</li>
	)
}

export default ReviewItem
