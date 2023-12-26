'use client'

import styles from './reservation-widget.module.scss'
import { FC } from 'react'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import SmallText from '@/components/ui/small-text/SmallText'
import { getTotalPrice } from '@/utils/get-total-price'
import Text from '@/components/ui/text/Text'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'

const ReservationWidget: FC<{ apartment: IApartment }> = ({ apartment }) => {
	return (
		<div className={styles.widget}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.header}>
						<ParagraphHeading>${apartment.price} </ParagraphHeading>
						<SmallText>night</SmallText>
					</div>
					<button className={styles.button}>Reserve</button>
					<p className={styles.charging}>You won't be charged yet</p>
					<div className={styles.total__counter}>
						<MediumHeading>
							${apartment.price} x 5 nights
						</MediumHeading>
						<Text>
							$
							{getTotalPrice({
								nights: 5,
								price: apartment.price,
							})}
						</Text>
					</div>
					<div className={styles.footer}>
						<MediumHeading>Total before taxes</MediumHeading>
						<Text>
							$
							{getTotalPrice({
								nights: 5,
								price: apartment.price,
							})}
						</Text>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReservationWidget
