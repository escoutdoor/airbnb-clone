'use client'

import styles from './reservation-widget.module.scss'
import { FC } from 'react'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import Link from 'next/link'
import SmallText from '@/components/ui/small-text/SmallText'
import { getTotalPrice } from '@/utils/get-total-price'
import Text from '@/components/ui/text/Text'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'
import GradientButton from '@/components/ui/gradient-button/GradientButton'
import { useDatesRange } from '@/hooks/useDatesRange'

const ReservationWidget: FC<{ apartment: IApartment }> = ({ apartment }) => {
	const { daysDifference } = useDatesRange()

	return (
		<div className={styles.widget}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.header}>
						<ParagraphHeading>${apartment.price} </ParagraphHeading>
						<SmallText>night</SmallText>
					</div>
					<Link href={`/reservation/${apartment.id}`}>
						<GradientButton>Reserve</GradientButton>
					</Link>
					<p className={styles.charging}>You won't be charged yet</p>
					{daysDifference ? (
						<>
							<div className={styles.total__counter}>
								<MediumHeading>
									${apartment.price} x {daysDifference} night
									{daysDifference > 1 ? 's' : null}
								</MediumHeading>
								<Text>
									$
									{getTotalPrice({
										nights: daysDifference,
										price: apartment.price,
									})}
								</Text>
							</div>
							<div className={styles.footer}>
								<MediumHeading>
									Total before taxes
								</MediumHeading>
								<Text>
									$
									{getTotalPrice({
										nights: daysDifference,
										price: apartment.price,
									})}
								</Text>
							</div>
						</>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default ReservationWidget
