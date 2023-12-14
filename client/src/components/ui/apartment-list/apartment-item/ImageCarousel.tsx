import styles from './apartment-item.module.scss'
import { FC } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'
import Image from 'next/image'
import CarouselButtons from '../../carousel-buttons/CarouselButtons'

const ImageCarousel: FC<{ images: string[] }> = ({ images }) => {
	return (
		<Swiper
			modules={[Navigation]}
			pagination={{ clickable: true }}
			className={styles.swiper}
			allowTouchMove={false}
		>
			{images.map((img, index) => (
				<SwiperSlide key={index} className={styles.slide}>
					<Image
						src={`/images/apartments/${img}`}
						width={270}
						height={256}
						alt={img}
						className={styles.image}
						draggable={false}
					/>
				</SwiperSlide>
			))}
			<CarouselButtons />
		</Swiper>
	)
}

export default ImageCarousel
