'use client'

import ModalContainer from '../modal-container/ModalContainer'
import styles from './share-modal.module.scss'
import { FC } from 'react'
import { useShareModal } from '@/hooks/useShareModal'

const ShareModal: FC = () => {
	const { isActive, close } = useShareModal()

	return (
		<ModalContainer
			close={close}
			title="Share this place"
			isActive={isActive}
			modalName="share"
		>
			SHARE MODAL
		</ModalContainer>
	)
}

export default ShareModal
