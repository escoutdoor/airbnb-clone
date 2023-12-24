import styles from './underlined-button.module.scss'
import { ButtonProps } from '@/interfaces/button-props.interface'
import { FC, PropsWithChildren } from 'react'

const UnderlinedButton: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...rest
}) => {
	return (
		<button {...rest} className={styles.button}>
			{children}
		</button>
	)
}

export default UnderlinedButton
