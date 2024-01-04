'use client'

import styles from './rooms-beds-select.module.scss'
import { FC } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import RoomsBedsCountSelector from './RoomsBedsCountSelector'
import { useCreateQuery } from '@/hooks/useCreateQuery'
import { useRouter } from 'next/navigation'

type RoomsBedsSelectProps = {
	bedrooms?: number
	beds?: number
	bathrooms?: number
}

const RoomsBedsSelect: FC<RoomsBedsSelectProps> = ({
	bedrooms,
	beds,
	bathrooms,
}) => {
	const { push } = useRouter()

	const { createQuery } = useCreateQuery()

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<ParagraphHeading>Rooms and beds</ParagraphHeading>
				<RoomsBedsCountSelector
					title="Bedrooms"
					onChange={e =>
						push(
							createQuery({
								name: 'bedrooms',
								value: e?.toString(),
							})
						)
					}
					value={bedrooms}
				/>
				<RoomsBedsCountSelector
					title="Beds"
					onChange={e =>
						push(
							createQuery({
								name: 'beds',
								value: e?.toString(),
							})
						)
					}
					value={beds}
				/>
				<RoomsBedsCountSelector
					title="Bathrooms"
					onChange={e =>
						push(
							createQuery({
								name: 'bathrooms',
								value: e?.toString(),
							})
						)
					}
					value={bathrooms}
				/>
			</div>
		</section>
	)
}

export default RoomsBedsSelect
