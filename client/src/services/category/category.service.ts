import { ICategory } from '@/shared/interfaces/category.interface';
import { instance } from '../helpers/axios.instance';
import { CATEGORY_URL } from '../helpers/api.constants';

export const CategoryService = {
  async getAll() {
    return await instance<ICategory[]>({
      method: 'GET',
      url: CATEGORY_URL,
    });
  },
};
