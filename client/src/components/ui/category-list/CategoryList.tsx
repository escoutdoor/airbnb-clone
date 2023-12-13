'use client'

import styles from './category-list.module.scss'
import { FC } from 'react'
import { ICategory } from '@/shared/interfaces/category.interface'
import { useSearchParams } from 'next/navigation'
import { useCreateQuery } from '@/hooks/useCreateQuery'
import CategoryItem from './CategoryItem'
import { useScrollPosition } from '@/hooks/useScrollPosition'

const CategoryList: FC<{ categories: ICategory[] }> = ({ categories }) => {
	const { createQuery } = useCreateQuery()

	const { get } = useSearchParams()

	const activeCategory = get('category') || 'Arctic'

	const scrollPosition = useScrollPosition()

	return (
		<ul
			className={
				scrollPosition ? `${styles.list} ${styles.active}` : styles.list
			}
		>
			<div className="wrapper">
				<div className={styles.content}>
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
				</div>
			</div>
		</ul>
	)
}

export default CategoryList
