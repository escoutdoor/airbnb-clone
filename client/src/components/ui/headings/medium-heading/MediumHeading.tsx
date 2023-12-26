import styles from './medium-heading.module.scss'
import { FC, PropsWithChildren } from 'react'
import { HeadingProps } from '@/interfaces/text-props.interface'

const MediumHeading: FC<PropsWithChildren<HeadingProps>> = ({
	children,
	...rest
}) => {
	return (
		<h2 className={styles.heading} {...rest}>
			{children}
		</h2>
	)
}

export default MediumHeading
