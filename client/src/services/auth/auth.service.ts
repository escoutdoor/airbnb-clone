import { AUTH_URL } from '../helpers/api.constants'
import { instance } from '../helpers/axios.instance'
import { IAuthResponse, ILogin, IRegister } from './auth.interface'

export const AuthService = {
	async login(data: ILogin) {
		const response = await instance({
			method: 'POST',
			url: `${AUTH_URL}/login`,
			data: data,
		})

		return response
	},

	async register(data: IRegister) {},

	async getToken(refreshToken: string) {
		const response = await instance.post<IAuthResponse>(
			`${AUTH_URL}/access-token`,
			{
				refreshToken,
			}
		)
		return response.data
	},
}
