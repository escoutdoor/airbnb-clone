import Image from 'next/image'
import styles from './loading.module.scss'
import { FC } from 'react'

const Loading: FC = () => {
	return (
		<div className={styles.container}>
			<Image
				src="/loader.gif"
				width={300}
				height={225}
				alt="loader.gif"
			/>
		</div>
	)
}

export default Loading
