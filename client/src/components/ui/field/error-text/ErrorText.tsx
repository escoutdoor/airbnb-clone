import SmallText from '../../small-text/SmallText'
import styles from './error-text.module.scss'
import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react'
import { PiSealWarning } from 'react-icons/pi'

const ErrorText: FC<PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>>> = ({
	children: message,
	...rest
}) => {
	return (
		<div className={styles.error} {...rest}>
			<SmallText>{message}</SmallText>
			<PiSealWarning className={styles.icon} />
		</div>
	)
}

export default ErrorText
