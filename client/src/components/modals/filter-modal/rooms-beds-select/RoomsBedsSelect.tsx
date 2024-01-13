'use client'

import styles from './rooms-beds-select.module.scss'
import { Dispatch, FC, SetStateAction } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import RoomsBedsCountSelector from './RoomsBedsCountSelector'
import { IApartmentFilterParams } from '@/services/apartment/apartment-params.interface'

type RoomsBedsSelectProps = {
	bedrooms: number | undefined
	beds: number | undefined
	bathrooms: number | undefined
	maxGuests: number | undefined
	setFilter: Dispatch<SetStateAction<IApartmentFilterParams>>
}

const RoomsBedsSelect: FC<RoomsBedsSelectProps> = ({
	bedrooms,
	beds,
	bathrooms,
	maxGuests,
	setFilter,
}) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<ParagraphHeading>Rooms and beds</ParagraphHeading>
				<RoomsBedsCountSelector
					title="Bedrooms"
					onChange={e =>
						setFilter(prev => ({
							...prev,
							bedrooms: e?.toString(),
						}))
					}
					value={bedrooms}
				/>
				<RoomsBedsCountSelector
					title="Beds"
					onChange={e =>
						setFilter(prev => ({
							...prev,
							beds: e?.toString(),
						}))
					}
					value={beds}
				/>
				<RoomsBedsCountSelector
					title="Bathrooms"
					onChange={e =>
						setFilter(prev => ({
							...prev,
							bathrooms: e?.toString(),
						}))
					}
					value={bathrooms}
				/>
				<RoomsBedsCountSelector
					title="Max guests"
					onChange={e =>
						setFilter(prev => ({
							...prev,
							maxGuests: e?.toString(),
						}))
					}
					value={maxGuests}
				/>
			</div>
		</section>
	)
}

export default RoomsBedsSelect
