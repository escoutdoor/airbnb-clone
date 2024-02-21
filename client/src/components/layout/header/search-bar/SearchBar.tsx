'use client'

import styles from './search-bar.module.scss'
import { FC, useState } from 'react'
import { useFilterApartments } from '@/hooks/useFilterApartments'
import { IoSearch } from 'react-icons/io5'
import Text from '@/components/ui/text/Text'

const SearchBar: FC = () => {
	const [query, setQuery] = useState('')
	const { apartments } = useFilterApartments({
		searchTerm: query,
	})

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<input
					className={styles.input}
					value={query}
					onChange={e => setQuery(e.target.value)}
					placeholder="Search..."
				/>
				<IoSearch className={styles.icon} />
			</div>
			<ul
				className={
					query && apartments?.length
						? `${styles.list} ${styles.active}`
						: styles.list
				}
			>
				{apartments?.map(a => (
					<li className={styles.item}>
						<Text>{a.name}</Text>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SearchBar
