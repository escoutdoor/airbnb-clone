import styles from './user.module.scss'
import { NextPage } from 'next'
import { IUser } from '@/shared/interfaces/user.interface'
import UserCard from './user-card/UserCard'

const User: NextPage<{ user: IUser }> = ({ user }) => {
	return (
		<div className={styles.container}>
			<div className={styles.sidebar}>
				<UserCard user={user} />
			</div>
			<main>1</main>
		</div>
	)
}

export default User
