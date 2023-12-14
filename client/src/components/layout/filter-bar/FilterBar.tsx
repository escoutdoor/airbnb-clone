'use client'

import styles from './filter-bar.module.scss'
import { FC } from 'react'
import { ICategory } from '@/shared/interfaces/category.interface'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { GiSettingsKnobs } from 'react-icons/gi'
import { useFilterModal } from '@/hooks/useFilterModal'
import CategoryList from './category-list/CategoryList'
import SmallText from '@/components/ui/small-text/SmallText'

const FilterBar: FC<{ categories: ICategory[] }> = ({ categories }) => {
	const scrollPosition = useScrollPosition()

	const { handleClick } = useFilterModal()

	return (
		<div
			className={
				scrollPosition ? `${styles.bar} ${styles.active}` : styles.bar
			}
		>
			<div className="wrapper">
				<div className={styles.content}>
					<CategoryList categories={categories} />
					<button className={styles.button} onClick={handleClick}>
						<GiSettingsKnobs className={styles.icon} />
						<SmallText>Filters</SmallText>
					</button>
				</div>
			</div>
		</div>
	)
}

export default FilterBar
