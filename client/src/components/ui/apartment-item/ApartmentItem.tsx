import { IApartmentItem } from '@/shared/interfaces/apartment.interface'
import { FC } from 'react'
import Text from '../text/Text'

const ApartmentItem: FC<{ item: IApartmentItem }> = ({ item }) => {
	return (
		<div>
			<Text>{item.name}</Text>
		</div>
	)
}

export default ApartmentItem
