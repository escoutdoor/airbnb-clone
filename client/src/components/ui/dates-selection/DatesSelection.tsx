import styles from './dates-selection.module.scss'
import { FC, useCallback, useState } from 'react'
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range'
import { addDays } from 'date-fns'
import { enUS } from 'date-fns/locale'

type DatesSelectionProps = {}

const DatesSelection: FC = ({}) => {
	const [range, setRange] = useState<Range>({
		startDate: new Date(),
		endDate: addDays(new Date(), 3),
		key: 'selection',
	})

	const handleChange = useCallback((ranges: RangeKeyDict) => {
		const { selection } = ranges
		setRange(selection)
	}, [])

	return (
		<div className={styles.container}>
			<DateRangePicker
				ranges={[range]}
				onChange={handleChange}
				minDate={new Date()}
				disabledDates={[]}
				editableDateInputs={true}
				moveRangeOnFirstSelection={false}
				locale={enUS}
				weekStartsOn={1}
				rangeColors={['#FD5B61']}
				className={styles.range}
				showDateDisplay={true}
				showPreview={true}
				months={2}
				direction="horizontal"
			/>
		</div>
	)
}

export default DatesSelection
