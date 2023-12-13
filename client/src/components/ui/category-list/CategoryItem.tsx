import styles from './category-list.module.scss'
import { FC } from 'react'
import { ICategory } from '@/shared/interfaces/category.interface'
import SmallText from '../small-text/SmallText'
import Image from 'next/image'

interface ICategoryItemProps {
	item: ICategory
	onClick: () => void
	isActive: boolean
}

const CategoryItem: FC<ICategoryItemProps> = ({ item, onClick, isActive }) => {
	return (
		<li
			className={
				isActive ? `${styles.item} ${styles.active}` : styles.item
			}
			onClick={onClick}
		>
			<Image
				width={24}
				height={24}
				src={`/icons/categories/${item.image}`}
				alt={item.image}
			/>

			<SmallText>{item.name}</SmallText>
		</li>
	)
}

export default CategoryItem
