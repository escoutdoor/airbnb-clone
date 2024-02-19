'use client'

import styles from './dates-range.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { enUS } from 'date-fns/locale'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useCallback, useEffect, useMemo } from 'react'
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range'
import qs from 'qs'
import { useDatesRange } from '@/hooks/useDatesRange'
import { formatISO } from 'date-fns'

type DatesRangeProps = {
	apartment: IApartment
}

const DatesRange: FC<DatesRangeProps> = ({ apartment }) => {
	const pathname = usePathname()
	const { push } = useRouter()
	const { checkIn, checkOut } = useDatesRange()

	const range = useMemo<Range>(
		() => ({
			startDate: checkIn,
			endDate: checkOut,
			key: 'selection',
		}),
		[checkIn, checkOut],
	)

	const handleChange = useCallback((ranges: RangeKeyDict) => {
		const { selection } = ranges

		const r: { check_in?: string; check_out?: string } = {}

		if (selection.startDate) {
			r.check_in = formatISO(new Date(selection.startDate), {
				representation: 'date',
			})
		}

		if (selection.endDate) {
			r.check_out = formatISO(new Date(selection.endDate), {
				representation: 'date',
			})
		}

		const query = qs.stringify({ ...r }, { skipNulls: true, indices: true })

		push(`${pathname}?${query}`, { scroll: false })
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

export default DatesRange
