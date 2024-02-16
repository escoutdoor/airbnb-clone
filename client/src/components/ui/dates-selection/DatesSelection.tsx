import styles from './dates-selection.module.scss'
import { FC, useCallback, useMemo, useState } from 'react'
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range'
import { addDays } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { usePathname, useSearchParams } from 'next/navigation'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { useRouter } from 'next/navigation'
import qs from 'qs'

type DatesSelectionProps = {
	apartment: IApartment
}

const DatesSelection: FC<DatesSelectionProps> = ({}) => {
	const { get } = useSearchParams()
	const pathname = usePathname()
	const { push } = useRouter()

	const startDate = new Date()
	const endDate = new Date()

	const range = useMemo<Range>(
		() => ({
			startDate,
			endDate,
			key: 'selection',
		}),
		[startDate, endDate],
	)

	const handleChange = useCallback((ranges: RangeKeyDict) => {
		const { selection } = ranges

		const query = qs.stringify(
			{
				start_date: startDate,
				end_date: endDate,
			},
			{
				indices: false,
				skipNulls: true,
			},
		)

		push(`${pathname}?${query}`)
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
