import styles from './dark-button.module.scss'
import { ButtonProps } from '@/interfaces/button-props.interface'
import { FC, PropsWithChildren } from 'react'
import Text from '../text/Text'

const DarkButton: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...rest
}) => {
	return (
		<button className={styles.button} {...rest}>
			<Text>{children}</Text>
		</button>
	)
}

export default DarkButton
