import styles from './paragraph-heading.module.scss'
import { HeadingProps } from '@/interfaces/text-props.interface'
import { FC, PropsWithChildren } from 'react'

const ParagraphHeading: FC<PropsWithChildren<HeadingProps>> = ({
	children,
	...rest
}) => {
	return (
		<h1 {...rest} className={styles.heading}>
			{children}
		</h1>
	)
}

export default ParagraphHeading
