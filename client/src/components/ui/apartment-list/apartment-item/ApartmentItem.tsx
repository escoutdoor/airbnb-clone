'use client'

import styles from './apartment-item.module.scss'
import { FC } from 'react'
import { IApartmentItem } from '@/shared/interfaces/apartment.interface'
import ImageCarousel from './ImageCarousel'
import Text from '../../text/Text'
import Rating from '../../rating/Rating'
import SmallText from '../../small-text/SmallText'
import Link from 'next/link'

const ApartmentItem: FC<{ item: IApartmentItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Link href={`/apartments/${item.id}`}>
				<ImageCarousel images={item.images} />
				<div className={styles.card}>
					<div className={styles.text}>
						<Text>{item.name} </Text>
						<div className={styles.price}>
							<Text>$59</Text> <SmallText>night</SmallText>
						</div>
					</div>
					<Rating rating={4.75} />
				</div>
			</Link>
		</div>
	)
}

export default ApartmentItem
