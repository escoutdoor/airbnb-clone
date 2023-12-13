'use client'

import styles from './rating.module.scss'
import { FC } from 'react'
import { MdStar, MdStarBorder } from 'react-icons/md'
import SmallText from '../small-text/SmallText'

const Rating: FC<{ rating: number }> = ({ rating }) => {
	return (
		<div className={styles.rating}>
			{rating ? <MdStar /> : <MdStarBorder />}
			<SmallText>{rating}</SmallText>
		</div>
	)
}

export default Rating
