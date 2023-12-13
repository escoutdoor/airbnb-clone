import ApartmentItem from '@/components/ui/apartment-item/ApartmentItem'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div>
			<ApartmentItem
				item={{
					id: 'asa',
					images: ['asa'],
					name: 'asa',
				}}
			/>
		</div>
	)
}

export default Home
