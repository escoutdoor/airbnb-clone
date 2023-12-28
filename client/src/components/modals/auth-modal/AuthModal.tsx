'use client'

import ModalContainer from '../modal-container/ModalContainer'
import styles from './auth-modal.module.scss'
import { FC } from 'react'
import { useAuthModal } from '@/hooks/useAuthModal'

const AuthModal: FC = () => {
	const { isActive, close } = useAuthModal()

	return (
		<ModalContainer
			close={close}
			title="Sign in or register"
			isActive={isActive}
		>
			AUTH MODAL
		</ModalContainer>
	)
}

export default AuthModal
