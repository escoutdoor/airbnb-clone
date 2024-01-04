'use client'

import styles from './modal-container.module.scss'
import {
	FC,
	HTMLAttributes,
	PropsWithChildren,
	ReactNode,
	useLayoutEffect,
} from 'react'
import { IoClose } from 'react-icons/io5'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'

interface IModalContainer extends HTMLAttributes<HTMLDivElement> {
	isActive: boolean
	close: () => void
	title?: string
	modalName: ModalName
	footer?: ReactNode
}

type ModalName = 'description' | 'auth' | 'filter' | 'share' | 'wishlist'

const ModalContainer: FC<PropsWithChildren<IModalContainer>> = ({
	isActive,
	close,
	children,
	title,
	modalName,
	footer,
	...rest
}) => {
	useLayoutEffect(() => {
		if (isActive) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.removeProperty('overflow-y')
		}
	}, [isActive])

	return (
		<div
			className={
				isActive
					? `${styles.container} ${styles.active}`
					: styles.container
			}
			onClick={close}
		>
			<div
				{...rest}
				className={`${styles.modal} ${styles[modalName]}`}
				onClick={e => e.stopPropagation()}
			>
				<div className={styles.header}>
					<button className={styles.button} onClick={close}>
						<IoClose className={styles.icon} />
					</button>
					<MediumHeading>{title}</MediumHeading>
				</div>
				<div className={styles.content}>{children}</div>
				{footer && <div className={styles.footer}>{footer}</div>}
			</div>
		</div>
	)
}

export default ModalContainer
