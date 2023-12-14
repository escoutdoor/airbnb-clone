import { ICategory } from '@/shared/interfaces/category.interface'
import { instance } from '../helpers/axios.instance'

export const CategoryService = {
	async getAll() {
		return await instance.get<ICategory[]>('/categories')
	},
}
