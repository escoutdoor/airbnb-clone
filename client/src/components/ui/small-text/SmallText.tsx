import styles from './small-text.module.scss'
import { FC, PropsWithChildren } from 'react'
import { TextProps } from '@/interfaces/text-props.interface'

const SmallText: FC<PropsWithChildren<TextProps>> = ({ children, ...rest }) => {
	return (
		<p className={styles.text} {...rest}>
			{children}
		</p>
	)
}

export default SmallText
