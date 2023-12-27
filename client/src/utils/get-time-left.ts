import { DateTime } from 'luxon'

export const getTimeLeft = (date: string) => {
	return DateTime.fromISO(date).toRelative({
		style: 'long',
		locale: 'en-US',
	})
}
