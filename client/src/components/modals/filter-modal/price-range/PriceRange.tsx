import styles from './price-range.module.scss'
import { FC, useEffect, useState } from 'react'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'
import SmallText from '@/components/ui/small-text/SmallText'
import ReactSlider from 'react-slider'
import Field from '@/components/ui/field/Field'

type PriceRangeProps = {
	onChange: (values: number[]) => void
	values: number[]
	defaultValues: number[]
}

const PriceRange: FC<PriceRangeProps> = ({
	onChange,
	values,
	defaultValues,
}) => {
	const [range, setRange] = useState(values)

	const handleChange = (values: number[]) => {
		const [min, max] = values
		setRange(values)

		if (min > max || min < 10) return

		onChange(values)
	}

	const handleBlur = () => {
		const [min, max] = range

		if (min > max) {
			setRange([range[1], range[1]])
		}

		if (max < min) {
			setRange([range[0], range[0]])
		}

		if (min < 10) {
			setRange([10, range[1]])
		}

		if (max > 10000) {
			setRange([range[0], 10000])
		}
	}

	useEffect(() => {
		setRange(values)
	}, [...values])

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
						onChange={onChange}
						value={values}
						min={defaultValues[0]}
						max={defaultValues[1]}
						defaultValue={defaultValues}
						step={10}
						key={'slider'}
						renderThumb={(props, state) => (
							<div {...props} key={state.index}></div>
						)}
					/>
					<div className={styles.values}>
						<Field
							label="Minimum"
							value={range[0]}
							onChange={e =>
								handleChange([+e.target.value, range[1]])
							}
							onBlur={handleBlur}
						/>
						<span className={styles.line} />
						<Field
							label="Maximum"
							value={range[1]}
							onChange={e =>
								handleChange([range[0], +e.target.value])
							}
							onBlur={handleBlur}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PriceRange
