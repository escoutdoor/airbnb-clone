import styles from './user-card.module.scss'
import { FC } from 'react'
import { IUser } from '@/shared/interfaces/user.interface'
import { DateTime } from 'luxon'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'
import SmallText from '@/components/ui/small-text/SmallText'
import Image from 'next/image'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'

const UserCard: FC<{ user: IUser }> = ({ user }) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.left}>
					<Image
						src={user.avatar}
						width={104}
						height={104}
						title={user.firstName}
						alt={user.id + 'avatar' + user?.avatar}
						className={styles.avatar}
					/>
					<ParagraphHeading>{user.firstName}</ParagraphHeading>
				</div>
				<div className={styles.right}>
					<MediumHeading>
						{DateTime.fromISO(user.createdAt).toLocaleString(
							DateTime.DATE_MED,
							{ locale: 'en-US' }
						)}
					</MediumHeading>
					<SmallText>Joined Airbnb</SmallText>
				</div>
			</div>
		</div>
	)
}

export default UserCard
