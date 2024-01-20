'use client'

import { useProfile } from '@/hooks/useProfile'
import styles from './wishlists.module.scss'
import { NextPage } from 'next'

const Wishlists: NextPage = () => {
	const { profile } = useProfile()

	return <div>Wishlists</div>
}

export default Wishlists
