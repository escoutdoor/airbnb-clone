import { IUserDetails } from '@/shared/interfaces/user.interface'
import { USER_URL } from '../helpers/api.constants'
import { instance } from '../helpers/axios.instance'

export const UserService = {
	async getProfile() {
		const response = await instance<IUserDetails>({
			method: 'GET',
			url: `${USER_URL}`,
		})

		return response
	},
}
