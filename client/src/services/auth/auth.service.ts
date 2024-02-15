import { signIn } from 'next-auth/react';
import { AUTH_URL } from '../helpers/api.constants';
import { defaultInstance, instance } from '../helpers/axios.instance';
import { IAuthResponse } from './auth.interface';
import { TLoginSchema, TRegisterSchema } from '@/lib/schemas/auth.schema';
import axios from 'axios';

export const AuthService = {
  async login(data: TLoginSchema) {
    const response = await instance({
      method: 'POST',
      url: `${AUTH_URL}/login`,
      data: data,
    });

    return response;
  },

  async register(data: TRegisterSchema) {
    const response = await instance<IAuthResponse>({
      method: 'POST',
      url: `${AUTH_URL}/register`,
      data: data,
    });

    await signIn('credentials', {
      email: data.email,
      password: data.password,
    });

    return response;
  },

  async getToken(refreshToken: string) {
    const response = await defaultInstance<IAuthResponse>({
      method: 'POST',
      url: `${AUTH_URL}/access-token`,
      data: {
        refreshToken,
      },
    });

    return response.data;
  },
};
