import styles from './apartment-list.module.scss'
import { FC } from 'react'
import { IApartmentItem } from '@/shared/interfaces/apartment.interface'
import ApartmentItem from './apartment-item/ApartmentItem'

type ApartmentListProps = {
	apartments: IApartmentItem[]
}

const ApartmentList: FC<ApartmentListProps> = ({ apartments }) => {
	return (
		<ul className={styles.list}>
			{apartments.map(item => (
				<ApartmentItem key={item.id} item={item} />
			))}
		</ul>
	)
}

export default ApartmentList
