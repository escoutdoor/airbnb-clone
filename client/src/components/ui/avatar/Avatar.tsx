import styles from './avatar.module.scss'
import { FC } from 'react'
import { IUser } from '@/shared/interfaces/user.interface'
import Image from 'next/image'
import Link from 'next/link'

const Avatar: FC<{ user: IUser }> = ({ user }) => {
	return (
		<Link href={`/users/${user.id}`} className={styles.link}>
			<Image
				src={user.avatar}
				width={48}
				height={48}
				alt={`user avatar ${user.avatar}`}
				className={styles.avatar}
			/>
		</Link>
	)
}

export default Avatar
