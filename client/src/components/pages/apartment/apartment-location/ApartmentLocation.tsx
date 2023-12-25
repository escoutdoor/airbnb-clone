import styles from './apartment-location.module.scss'
import { FC } from 'react'
import { IApartmentLocation } from '@/shared/interfaces/apartment.interface'

const ApartmentLocation: FC<{ location: IApartmentLocation }> = ({
	location,
}) => {
	return <div className={styles.container}></div>
}

export default ApartmentLocation
