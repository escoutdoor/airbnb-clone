import { TUserSchema } from '@/lib/schemas/user.schema';
import { IUser, IUserDetails } from '@/shared/interfaces/user.interface';
import { USER_URL } from '../helpers/api.constants';
import { instance } from '../helpers/axios.instance';

export const UserService = {
  async getProfile() {
    const response = await instance<IUserDetails>({
      method: 'GET',
      url: `${USER_URL}`,
    });

    return response;
  },

  async getById(userId: string) {
    const response = await instance<IUser>({
      method: 'GET',
      url: `${USER_URL}/${userId}`,
    });

    return response;
  },

  async updateProfile(data: TUserSchema) {
    const response = await instance<IUserDetails>({
      method: 'PUT',
      url: `${USER_URL}`,
      data,
    });

    return response;
  },
};
