import styles from './amenities-select.module.scss'
import { FC } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import Checkbox from '@/components/ui/checkbox/Checkbox'

type AmenitiesSelectProps = {
	amenities: string[]
	onChange: (value: string) => void
}

const AmenitiesSelect: FC<AmenitiesSelectProps> = ({ amenities, onChange }) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<ParagraphHeading>Amenities</ParagraphHeading>
				<div className={styles.options}>
					<Checkbox
						title="Wifi"
						isActive={amenities.includes('Wifi')}
						onClick={() => onChange('Wifi')}
					/>
					<Checkbox
						title="Dryer"
						isActive={amenities.includes('Dryer')}
						onClick={() => onChange('Dryer')}
					/>
				</div>
			</div>
		</section>
	)
}

export default AmenitiesSelect
