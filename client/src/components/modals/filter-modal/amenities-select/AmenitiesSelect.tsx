import Checkbox from '@/components/ui/checkbox/Checkbox'
import styles from './amenities-select.module.scss'
import { FC } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'

const AmenitiesSelect: FC<{
	amenities?: string[]
	onChange: (value?: string) => void
}> = ({ amenities, onChange }) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<ParagraphHeading>Amenities</ParagraphHeading>
				<div className={styles.options}>
					<Checkbox
						title="Wifi"
						isActive={amenities?.includes('Wifi') ?? false}
						onClick={() => onChange('Wifi')}
					/>
					<Checkbox
						title="Dryer"
						isActive={amenities?.includes('Dryer') ?? false}
						onClick={() => onChange('Dryer')}
					/>
				</div>
			</div>
		</section>
	)
}

export default AmenitiesSelect
