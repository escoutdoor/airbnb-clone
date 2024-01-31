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
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const HeaderNavigation: FC = () => {
	const { ref, isActive, setIsActive } = useOutside(false)

	const { open } = useAuthModal()
	const { profile } = useProfile()
	const { push } = useRouter()

	const authItems = [
		{
			id: 1,
			title: 'Sign up',
			onClick: () => open('register'),
		},
		{
			id: 2,
			title: 'Log in',
			onClick: () => open('login'),
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
					src={profile?.avatar || '/avatars/default.jpg'}
					width={32}
					height={32}
					className={styles.avatar}
					alt="avatar"
				/>
			</button>
			<ul className={styles.menu}>
				{!profile &&
					authItems.map(item => (
						<HeaderMenuItem key={item.id} item={item} />
					))}
				{headerMenu.map(item => (
					<HeaderMenuItem key={item.id} item={item} />
				))}
				{profile && (
					<>
						<HeaderMenuItem
							item={{
								id: 2,
								href: '/wishlists',
								title: 'Wishlists',
							}}
						/>
						<HeaderMenuItem
							item={{
								id: 1,
								onClick: () => {
									signOut({ callbackUrl: '/' })
								},
								title: 'Log out',
							}}
						/>
					</>
				)}
			</ul>
		</div>
	)
}

export default HeaderNavigation
