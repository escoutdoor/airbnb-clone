import { ApartmentType } from '@/shared/interfaces/apartment.interface'

export const getOverviewTitle = ({ type }: { type: ApartmentType }): string => {
	return `${type.charAt(0).toUpperCase() + type.slice(1)} in LOCATION`
}
