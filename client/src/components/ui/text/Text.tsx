import styles from './text.module.scss'
import { FC, PropsWithChildren } from 'react'
import { TextProps } from '@/interfaces/text-props.interface'

const Text: FC<PropsWithChildren<TextProps>> = ({ children, ...rest }) => {
	return (
		<p className={styles.text} {...rest}>
			{children}
		</p>
	)
}

export default Text
