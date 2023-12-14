import styles from './apartment.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { NextPage } from 'next'

const Apartment: NextPage<{ apartment: IApartment }> = ({ apartment }) => {
	return <div className={styles.page}></div>
}

export default Apartment
