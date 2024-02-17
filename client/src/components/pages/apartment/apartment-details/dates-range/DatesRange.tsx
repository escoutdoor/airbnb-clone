'use client'

import { formatISO, isValid } from 'date-fns'
import styles from './dates-range.module.scss'
import { IApartment } from '@/shared/interfaces/apartment.interface'
import { enUS } from 'date-fns/locale'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FC, useCallback, useEffect, useMemo } from 'react'
import { DateRangePicker, Range, RangeKeyDict } from 'react-date-range'
import { useCreateQuery } from '@/hooks/useCreateQuery'
import qs from 'qs'

type DatesRangeProps = {
	apartment: IApartment
}

const DatesRange: FC<DatesRangeProps> = ({ apartment }) => {
	const pathname = usePathname()
	const { push } = useRouter()
	const { get } = useSearchParams()
	const { removeQuery } = useCreateQuery()

	const checkIn = undefined
	const checkOut = undefined

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

		const r = {}

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
