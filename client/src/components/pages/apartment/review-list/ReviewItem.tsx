'use client'

import styles from './review-list.module.scss'
import { FC } from 'react'
import { IReview } from '@/shared/interfaces/review.interface'
import Avatar from '@/components/ui/avatar/Avatar'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'
import { getName } from '@/utils/get-name'
import { getTimeLeft } from '@/utils/get-time-left'
import SmallText from '@/components/ui/small-text/SmallText'
import Text from '@/components/ui/text/Text'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<li className={styles.item}>
			<div className={styles.header}>
				<Avatar user={review.user} />
				<div className={styles.right}>
					<MediumHeading>{getName(review.user)}</MediumHeading>
					<SmallText>
						Joined {getTimeLeft(review.user.createdAt)}
					</SmallText>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.details}>
					<SmallText>{getTimeLeft(review.createdAt)}</SmallText>
				</div>
				<Text>{review.text}</Text>
			</div>
		</li>
	)
}

export default ReviewItem
