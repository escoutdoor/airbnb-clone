'use client'

import styles from './auth-modal.module.scss'
import { FC } from 'react'
import { useAuthModal } from '@/hooks/useAuthModal'
import ModalContainer from '../modal-container/ModalContainer'
import AuthLoginTab from './AuthLoginTab'
import AuthRegisterTab from './AuthRegisterTab'
import SmallText from '@/components/ui/small-text/SmallText'
import UnderlinedButton from '@/components/ui/underlined-button/UnderlinedButton'

const AuthModal: FC = () => {
	const {
		status: { activeTab, isActive },
		close,
		changeTab,
	} = useAuthModal()

	return (
		<ModalContainer
			close={close}
			title={activeTab === 'login' ? 'Log in' : 'Sign up'}
			isActive={isActive}
			modalName="auth"
			footer={
				<div className={styles.footer}>
					{activeTab === 'login' && (
						<>
							<SmallText>Don't have an account?</SmallText>{' '}
							<UnderlinedButton
								onClick={() => changeTab('register')}
							>
								Sign up
							</UnderlinedButton>
						</>
					)}
					{activeTab === 'register' && (
						<>
							<SmallText>Already have an account?</SmallText>{' '}
							<UnderlinedButton
								onClick={() => changeTab('login')}
							>
								Log in
							</UnderlinedButton>
						</>
					)}
				</div>
			}
		>
			<div className={styles.container}>
				{activeTab === 'login' && <AuthLoginTab />}
				{activeTab === 'register' && <AuthRegisterTab />}
			</div>
		</ModalContainer>
	)
}

export default AuthModal
