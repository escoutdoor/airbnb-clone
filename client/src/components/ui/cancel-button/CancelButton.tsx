import styles from './cancel-button.module.scss'
import { FC, PropsWithChildren } from 'react'
import { ButtonProps } from '@/interfaces/button-props.interface'
import Text from '../text/Text'

const CancelButton: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...rest
}) => {
	return (
		<button className={styles.button} {...rest}>
			<Text>{children}</Text>
		</button>
	)
}

export default CancelButton
