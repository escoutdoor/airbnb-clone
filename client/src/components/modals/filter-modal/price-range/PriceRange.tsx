import styles from './price-range.module.scss'
import { FC } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import SmallText from '@/components/ui/small-text/SmallText'

const PriceRange: FC<{}> = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<ParagraphHeading>Price range</ParagraphHeading>
					<SmallText>Nightly prices before fees and taxes</SmallText>
				</div>
			</div>
		</section>
	)
}

export default PriceRange
