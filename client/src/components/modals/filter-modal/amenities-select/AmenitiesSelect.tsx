'use client'

import styles from './amenities-select.module.scss'
import { FC, useState } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import { amenityOptions } from '@/data/filter.data'
import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton'
import { LuChevronRight } from 'react-icons/lu'

type AmenitiesSelectProps = {
	amenities?: string | string[]
	onChange: (value: string) => void
}

const AmenitiesSelect: FC<AmenitiesSelectProps> = ({ amenities, onChange }) => {
	const [isShowingMore, setIsShowingMore] = useState(false)

	const activeAmenities =
		typeof amenities === 'string' ? [amenities] : amenities ?? []

	const itemsToShow = isShowingMore ? amenityOptions.length : 6

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<ParagraphHeading>Amenities</ParagraphHeading>
				<div className={styles.options}>
					{amenityOptions.slice(0, itemsToShow).map(option => (
						<Checkbox
							key={option.id}
							label={option.label}
							isActive={activeAmenities?.some(
								a => a === option.value
							)}
							onClick={() => onChange(option.value)}
						/>
					))}
				</div>
				<UnderlinedButton
					onClick={() => setIsShowingMore(prev => !prev)}
				>
					{isShowingMore ? 'Show less' : 'Show more'}
					<LuChevronRight />
				</UnderlinedButton>
			</div>
		</section>
	)
}

export default AmenitiesSelect
