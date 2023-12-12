import { ICategory } from '@/shared/interfaces/category.interface'
import { defaultInstance } from '../helpers/axios.instance'

export const CategoryService = {
	async getAll() {
		return await defaultInstance.get<ICategory[]>('/categories')
	},
}
