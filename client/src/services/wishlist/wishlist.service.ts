import { WISHLIST_URL } from '../helpers/api.constants'
import { instance } from '../helpers/axios.instance'

interface IWishlistData {
	name: string
}

export const wishlistService = {
	async getById(wishlistId: string) {
		const response = await instance.get(`${WISHLIST_URL}/${wishlistId}`)

		return response
	},

	async create(data: IWishlistData) {
		const response = await instance.post(WISHLIST_URL, data)

		return response
	},

	async delete(wishlistId: string) {
		const response = await instance.delete(`${WISHLIST_URL}/${wishlistId}`)

		return response
	},

	async update(wishlistId: string, data: IWishlistData) {
		const response = await instance.put(
			`${WISHLIST_URL}/${wishlistId}`,
			data
		)

		return response
	},

	async toggleApartment(wishlistId: string, apartmentId: string) {
		const response = await instance.patch(`${WISHLIST_URL}/${wishlistId}`, {
			apartmentId,
		})

		return response
	},
}
