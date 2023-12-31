import { AUTH_URL } from '../helpers/api.constants'
import { instance } from '../helpers/axios.instance'
import { ILogin, IRegister } from './auth.interface'

export const AuthService = {
	async login(data: ILogin) {
		const response = await instance.post(`${AUTH_URL}/login`, data)

		return response.data
	},

	async register(data: IRegister) {},
}
