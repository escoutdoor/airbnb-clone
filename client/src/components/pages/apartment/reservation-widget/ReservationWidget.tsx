'use client'

import styles from './reservation-widget.module.scss'
import { FC } from 'react'
import { IApartment } from '@/shared/interfaces/apartment.interface'

const ReservationWidget: FC<{ apartment: IApartment }> = ({ apartment }) => {
	return <div className={styles.widget}>ReservationWidget</div>
}

export default ReservationWidget
