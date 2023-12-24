import { IUser, IUserDetails } from '@/shared/interfaces/user.interface'

export const useProfile = () => {
	return {
		profile: {
			wishlists: [
				{
					id: '1',
					apartments: [{ id: '1', images: ['asa'], name: '' }],
				},
			],
		} as IUserDetails,
	}
}
