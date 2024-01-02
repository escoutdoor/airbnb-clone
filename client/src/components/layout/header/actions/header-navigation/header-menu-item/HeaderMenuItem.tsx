import styles from '../header-navigation.module.scss'
import { FC } from 'react'
import { IHeaderMenuItem } from '@/interfaces/header-menu.interface'
import Link from 'next/link'
import Text from '@/components/ui/text/Text'

const HeaderMenuItem: FC<{ item: IHeaderMenuItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			{item.href ? (
				<Link className={styles.link} href={item.href}>
					<Text>{item.title}</Text>
				</Link>
			) : (
				<Text onClick={item.onClick}>{item.title}</Text>
			)}
		</li>
	)
}

export default HeaderMenuItem
