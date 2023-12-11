import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import styles from './text.module.scss'

type TextProps = HTMLAttributes<HTMLParagraphElement>

const Text: FC<PropsWithChildren<TextProps>> = ({ children, ...rest }) => {
	return (
		<p className={styles.text} {...rest}>
			{children}
		</p>
	)
}

export default Text
