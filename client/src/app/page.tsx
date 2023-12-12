import Home from '@/components/pages/home/Home'
import { CategoryService } from '@/services/category/category.service'

export default async function HomePage() {
	const { data } = await CategoryService.getAll()

	return <Home />
}
