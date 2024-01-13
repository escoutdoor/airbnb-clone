import styles from './price-range.module.scss'
import { FC } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import SmallText from '@/components/ui/small-text/SmallText'
import ReactSlider from 'react-slider'
import Field from '@/components/ui/field/Field'

type PriceRangeProps = {
	onChange: (values: number[]) => void
	values: number[]
}

const PriceRange: FC<PriceRangeProps> = ({ onChange, values }) => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<ParagraphHeading>Price range</ParagraphHeading>
					<SmallText>Nightly prices before fees and taxes</SmallText>
				</div>
				<div className={styles.range}>
					<ReactSlider
						className={styles.slider}
						thumbClassName={styles.thumb}
						trackClassName={styles.track}
						onAfterChange={onChange}
						value={values}
						min={10}
						max={10000}
						defaultValue={[10, 1000]}
						step={10}
						key={'slider'}
						renderThumb={(props, state) => (
							<div {...props} key={state.index}></div>
						)}
					/>
					<div className={styles.values}>
						<Field label="Minimum" value={values[0]} />
						<span className={styles.line} />
						<Field label="Maximum" value={values[1]} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default PriceRange
