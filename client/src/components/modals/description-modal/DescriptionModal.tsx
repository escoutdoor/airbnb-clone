'use client'

import styles from './description-modal.module.scss'
import { FC } from 'react'
import ModalContainer from '../modal-container/ModalContainer'
import { useApartmentDescriptionModal } from '@/hooks/useApartmentDescriptionModal'

const DescriptionModal: FC<{ description: string[] }> = ({ description }) => {
	const { isActive, close } = useApartmentDescriptionModal()

	return (
		<ModalContainer
			isActive={isActive}
			close={close}
			title="About this space"
			modalName="description"
		>
			<ul className={styles.list}>
				{description.map((paragraph, index) => (
					<li key={index}>{paragraph}</li>
				))}
			</ul>
		</ModalContainer>
	)
}

export default DescriptionModal
