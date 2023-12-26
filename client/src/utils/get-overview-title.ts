import {
	ApartmentType,
	IApartment,
} from '@/shared/interfaces/apartment.interface'
import { getLocationTitle } from './get-location-title'

export const getOverviewTitle = (apartment: IApartment): string => {
	return `${
		apartment.type.charAt(0).toUpperCase() + apartment.type.slice(1)
	} in ${getLocationTitle(apartment.location)}`
}
