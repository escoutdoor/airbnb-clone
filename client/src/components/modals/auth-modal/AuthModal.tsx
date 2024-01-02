'use client'

import ModalContainer from '../modal-container/ModalContainer'
import styles from './auth-modal.module.scss'
import { FC } from 'react'
import { useAuthModal } from '@/hooks/useAuthModal'
import { useSession } from 'next-auth/react'
import AuthLoginTab from './AuthLoginTab'
import AuthRegisterTab from './AuthRegisterTab'

const AuthModal: FC = () => {
	const { status, close } = useAuthModal()
	const { data: session } = useSession()

	return (
		<ModalContainer
			close={close}
			title={status.activeTab === 'login' ? 'Log in' : 'Sign up'}
			isActive={status.isActive}
			modalName="auth"
		>
			<div className={styles.container}>
				{status.activeTab === 'login' && <AuthLoginTab />}
				{status.activeTab === 'register' && <AuthRegisterTab />}
			</div>
		</ModalContainer>
	)
}

export default AuthModal
