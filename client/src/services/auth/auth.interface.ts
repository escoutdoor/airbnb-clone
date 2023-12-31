export interface ILogin {
	email: string
	password: string
}

export interface IRegister extends ILogin {
	firstName: string
	surName: string
}

export interface IAuthResponse {
	user: {
		id: string
		email: string
	}
	accessToken: string
	refreshToken: string
}
