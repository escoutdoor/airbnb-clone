'use client'

import styles from './modal-container.module.scss'
import { FC, PropsWithChildren, useLayoutEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'

interface IModalContainer {
	isActive: boolean
	close: () => void
	title?: string
}

const ModalContainer: FC<PropsWithChildren<IModalContainer>> = ({
	isActive,
	close,
	children,
	title,
}) => {
	useLayoutEffect(() => {
		if (isActive) {
			document.body.style.overflowY = 'hidden'
		} else {
			document.body.style.overflowY = 'auto'
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
			<div className={styles.modal} onClick={e => e.stopPropagation()}>
				<div className={styles.header}>
					<button className={styles.button} onClick={close}>
						<IoClose className={styles.icon} />
					</button>
					<MediumHeading>{title}</MediumHeading>
				</div>
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	)
}

export default ModalContainer
