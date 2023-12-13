import { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'

export const useSwiperReactive = () => {
	const swiper = useSwiper()

	// State to force a rerender.
	const [, setSignal] = useState({})
	const forceRerender = () => setSignal({})

	useEffect(() => {
		if (swiper) {
			swiper.on('slideChange', forceRerender)
			return () => {
				swiper.off('slideChange', forceRerender)
			}
		}
	}, [swiper])

	return swiper
}
