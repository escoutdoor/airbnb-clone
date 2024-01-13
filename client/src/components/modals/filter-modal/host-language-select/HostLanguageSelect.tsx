import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import styles from './host-language-select.module.scss'
import { FC } from 'react'
import Checkbox from '@/components/ui/checkbox/Checkbox'

type HostLanguageSelectProps = {
	hostLanguages: string[]
	onChange: (value: string) => void
}

const HostLanguageSelect: FC<HostLanguageSelectProps> = ({
	hostLanguages,
	onChange,
}) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<ParagraphHeading>Host language</ParagraphHeading>
				<div className={styles.options}>
					<Checkbox
						onClick={() => onChange('English')}
						isActive={hostLanguages?.includes('English') ?? false}
						title="English"
					/>
					<Checkbox
						onClick={() => onChange('Ukrainian')}
						isActive={hostLanguages?.includes('Ukrainian') ?? false}
						title="Ukrainian"
					/>
					<Checkbox
						onClick={() => onChange('Italian')}
						isActive={hostLanguages?.includes('Italian') ?? false}
						title="Italian"
					/>
					<Checkbox
						onClick={() => onChange('French')}
						isActive={hostLanguages?.includes('French') ?? false}
						title="French"
					/>
				</div>
			</div>
		</section>
	)
}

export default HostLanguageSelect
