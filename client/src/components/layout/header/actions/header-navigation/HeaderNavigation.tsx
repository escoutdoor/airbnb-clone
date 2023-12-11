import styles from './header-navigation.module.scss'
import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { useOutside } from '@/hooks/useOutside'
import { headerMenu } from '@/data/header-menu.data'
import { GiHamburgerMenu } from 'react-icons/gi'
import HeaderMenuItem from './header-menu-item/HeaderMenuItem'
import Image from 'next/image'

const HeaderNavigation: FC = () => {
	const { ref, isActive, setIsActive } = useOutside(false)

	const { profile } = useProfile()

	return (
		<div
			className={
				isActive
					? `${styles.navigation} ${styles.active}`
					: styles.navigation
			}
		>
			<button
				className={styles.button}
				onClick={() => setIsActive(!isActive)}
			>
				<GiHamburgerMenu className={styles.icon} />
				<Image
					src={`/avatars/${profile.avatarPath || 'default.jpg'}`}
					width={32}
					height={32}
					className={styles.avatar}
					alt="avatar"
				/>
			</button>
			<ul ref={ref} className={styles.menu}>
				{headerMenu.map(item => (
					<HeaderMenuItem key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}

export default HeaderNavigation
