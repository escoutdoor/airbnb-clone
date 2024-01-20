import styles from './host-language-select.module.scss'
import { FC, useState } from 'react'
import { hostLanguageOptions } from '@/data/filter.data'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import Checkbox from '@/components/ui/checkbox/Checkbox'
import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton'
import { LuChevronRight } from 'react-icons/lu'

type HostLanguageSelectProps = {
	hostLanguages?: string | string[]
	onChange: (value: string) => void
}

const HostLanguageSelect: FC<HostLanguageSelectProps> = ({
	hostLanguages,
	onChange,
}) => {
	const [isShowingMore, setIsShowingMore] = useState(false)

	const activeLanguages =
		typeof hostLanguages === 'string'
			? [hostLanguages]
			: hostLanguages ?? []

	const itemsToShow = isShowingMore ? hostLanguageOptions.length : 6

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<ParagraphHeading>Host language</ParagraphHeading>
				<div className={styles.options}>
					{hostLanguageOptions.slice(0, itemsToShow).map(option => (
						<Checkbox
							key={option.id}
							label={option.label}
							isActive={activeLanguages?.some(
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

export default HostLanguageSelect
