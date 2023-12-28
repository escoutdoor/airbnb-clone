'use client'

import styles from './header-navigation.module.scss'
import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { useOutside } from '@/hooks/useOutside'
import { headerMenu } from '@/data/header-menu.data'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useAuthModal } from '@/hooks/useAuthModal'
import HeaderMenuItem from './header-menu-item/HeaderMenuItem'
import Image from 'next/image'

const HeaderNavigation: FC = () => {
	const { ref, isActive, setIsActive } = useOutside(false)

	const { open } = useAuthModal()
	const { profile } = useProfile()

	const authItems = [
		{
			id: 1,
			title: 'Sign up',
			onClick: () => open(),
		},
		{
			id: 2,
			title: 'Log in',
			onClick: () => open(),
		},
	]

	return (
		<div
			className={
				isActive
					? `${styles.navigation} ${styles.active}`
					: styles.navigation
			}
			ref={ref}
		>
			<button
				className={styles.button}
				onClick={() => setIsActive(!isActive)}
			>
				<GiHamburgerMenu className={styles.icon} />
				<Image
					src={`/avatars/${profile.avatar || 'default.jpg'}`}
					width={32}
					height={32}
					className={styles.avatar}
					alt="avatar"
				/>
			</button>
			<ul className={styles.menu}>
				{authItems.map(item => (
					<HeaderMenuItem key={item.id} item={item} />
				))}
				{headerMenu.map(item => (
					<HeaderMenuItem key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}

export default HeaderNavigation
