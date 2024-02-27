'use client'

import { useProfile } from '@/hooks/useProfile'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { FC } from 'react'

type ReservationProps = {
	apartment: IApartment
}

const Reservation: FC<ReservationProps> = ({ apartment }) => {
	const { profile } = useProfile()

	return <div></div>
}

export default Reservation
