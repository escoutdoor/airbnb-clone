import { APARTMENT_URL } from '../helpers/api.constants'
import { instance } from '../helpers/axios.instance'
import {
	IApartment,
	IApartmentResponse,
} from '@/shared/interfaces/apartment.interface'
import { IApartmentFilterParams } from './apartment-params.interface'
import qs from 'qs'

export const ApartmentService = {
	async getById(id: string) {
		return await instance<IApartment>({
			method: 'GET',
			url: `${APARTMENT_URL}/${id}`,
		})
	},

	async getAll(params: IApartmentFilterParams) {
		const response = await instance<IApartmentResponse>({
			method: 'GET',
			url: `${APARTMENT_URL}`,
			params,
			paramsSerializer: params => {
				return qs.stringify(params, { arrayFormat: 'comma' })
			},
		})

		return response
	},
}
