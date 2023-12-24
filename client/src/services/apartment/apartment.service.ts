import { APARTMENT_URL } from '../helpers/api.constants'
import { instance } from '../helpers/axios.instance'
import {
	IApartment,
	IApartmentItem,
} from '@/shared/interfaces/apartment.interface'
import { IApartmentFilterParams } from './apartment-params.interface'

export const ApartmentService = {
	async getById(id: string) {
		return await instance.get<IApartment>(`${APARTMENT_URL}/${id}`)
	},

	async getAll(params: IApartmentFilterParams) {
		return await instance.get<IApartmentItem[]>(`${APARTMENT_URL}`, {
			params,
		})
	},
}
