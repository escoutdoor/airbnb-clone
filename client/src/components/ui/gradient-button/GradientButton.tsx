import styles from './gradient-button.module.scss'
import { FC, PropsWithChildren } from 'react'
import { ButtonProps } from '@/interfaces/button-props.interface'

const GradientButton: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...rest
}) => {
	return (
		<button {...rest} className={styles.button}>
			{children}
		</button>
	)
}

export default GradientButton
