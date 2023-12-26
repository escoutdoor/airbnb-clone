'use client'

import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton'
import styles from './apartment-details.module.scss'
import { FC } from 'react'
import { LuChevronRight } from 'react-icons/lu'
import { useApartmentDescriptionModal } from '@/hooks/useApartmentDescriptionModal'

const ApartmentDescription: FC<{ description: string[] }> = ({
	description,
}) => {
	const { handleClick } = useApartmentDescriptionModal()

	return (
		<div className={styles.description}>
			<ul className={styles.list}>
				{description.map((paragraph, index) => (
					<li key={index}>{paragraph}</li>
				))}
			</ul>

			{description.length > 3 ? (
				<UnderlinedButton onClick={handleClick}>
					Show more
					<LuChevronRight />
				</UnderlinedButton>
			) : null}
		</div>
	)
}

export default ApartmentDescription
