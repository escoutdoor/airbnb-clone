'use client'

import styles from './category-list.module.scss'
import { FC } from 'react'
import { ICategory } from '@/shared/interfaces/category.interface'
import { useSearchParams } from 'next/navigation'
import { useCreateQuery } from '@/hooks/useCreateQuery'
import CategoryItem from './CategoryItem'

const CategoryList: FC<{ categories: ICategory[] }> = ({ categories }) => {
	const { createQuery } = useCreateQuery()

	const { get } = useSearchParams()

	const activeCategory = get('category') || 'Arctic'

	return (
		<ul className={styles.list}>
			{categories?.map(category => (
				<CategoryItem
					key={category.id}
					item={category}
					isActive={activeCategory === category.name}
					onClick={() => {
						createQuery({
							name: 'category',
							value: category.name,
						})
					}}
				/>
			))}
		</ul>
	)
}

export default CategoryList
