'use client'

import styles from './carousel-buttons.module.scss'
import { FC } from 'react'
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md'
import { useSwiperReactive } from '@/hooks/useSwiperReactive'

const CarouselButtons: FC = () => {
	const swiper = useSwiperReactive()

	return (
		<div className={styles.buttons}>
			<button
				className={`${styles.button} ${styles.prev}`}
				onClick={e => {
					e.preventDefault()
					swiper.slidePrev()
				}}
				disabled={swiper.realIndex === 0}
			>
				<MdOutlineChevronLeft className={styles.icon} />
			</button>
			<button
				className={`${styles.button} ${styles.next}`}
				onClick={e => {
					e.preventDefault()
					swiper.slideNext()
				}}
				disabled={swiper.realIndex === swiper.slides.length - 1}
			>
				<MdOutlineChevronRight className={styles.icon} />
			</button>
		</div>
	)
}

export default CarouselButtons
