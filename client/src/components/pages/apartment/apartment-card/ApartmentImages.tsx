import { FC } from 'react'
import styles from './apartment-card.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import Image from 'next/image'

const ApartmentImages: FC<{ apartment: IApartment }> = ({ apartment }) => {
	return (
		<div className={styles.images}>
			{apartment.images?.slice(0, 5).map((image, index) => (
				<Image
					key={index}
					width={0}
					height={0}
					sizes="100vw"
					src={image}
					alt={apartment.name + 'image'}
					className={styles.image}
				/>
			))}
		</div>
	)
}

export default ApartmentImages
