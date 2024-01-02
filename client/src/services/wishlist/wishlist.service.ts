import { WISHLIST_URL } from '../helpers/api.constants'
import { instance } from '../helpers/axios.instance'

interface IWishlistData {
	name: string
}

export const wishlistService = {
	async getById(wishlistId: string) {
		const response = await instance({
			method: 'GET',
			url: `${WISHLIST_URL}/${wishlistId}`,
		})

		return response
	},

	async create(data: IWishlistData) {
		const response = await instance({
			method: 'POST',
			url: `${WISHLIST_URL}`,
			data,
		})

		return response
	},

	async delete(wishlistId: string) {
		const response = await instance({
			method: 'DELETE',
			url: `${WISHLIST_URL}/${wishlistId}`,
		})

		return response
	},

	async update(wishlistId: string, data: IWishlistData) {
		const response = await instance({
			method: 'PUT',
			url: `${WISHLIST_URL}/${wishlistId}`,
			data,
		})

		return response
	},

	async toggleApartment(wishlistId: string, apartmentId: string) {
		const response = await instance({
			method: 'PATCH',
			url: `${WISHLIST_URL}/${wishlistId}`,
			data: {
				apartmentId,
			},
		})

		return response
	},
}
