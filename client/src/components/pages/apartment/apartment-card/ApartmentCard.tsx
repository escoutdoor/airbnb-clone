'use client'

import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton'
import styles from './apartment-card.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { IoMdHeartEmpty, IoMdHeart, IoMdShareAlt } from 'react-icons/io'
import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { useWishListModal } from '@/hooks/useWishListModal'
import { useShareModal } from '@/hooks/useShareModal'
import ApartmentImages from './ApartmentImages'

const ApartmentCard: FC<{ apartment: IApartment }> = ({ apartment }) => {
	const { profile } = useProfile()
	const { open } = useWishListModal()
	const { open: openShare } = useShareModal()

	const isSaved = profile?.wishlists.some(list =>
		list.apartments.some(a => a.id === apartment.id)
	)

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<h1 className={styles.name}>{apartment.name}</h1>
				<div className={styles.actions}>
					<UnderlinedButton onClick={openShare}>
						<IoMdShareAlt className={styles.icon} />
						Share
					</UnderlinedButton>
					<UnderlinedButton onClick={() => open(apartment.id)}>
						{isSaved ? (
							<IoMdHeart
								className={`${styles.icon} ${styles.active}`}
							/>
						) : (
							<IoMdHeartEmpty className={styles.icon} />
						)}
						{isSaved ? 'Saved' : 'Save'}
					</UnderlinedButton>
				</div>
			</div>
			<ApartmentImages apartment={apartment} />
		</div>
	)
}

export default ApartmentCard
