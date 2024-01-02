import { create } from 'zustand'

type AuthModalState = {
	status: {
		isActive: boolean
		activeTab: 'login' | 'register'
	}
	open: (tab: 'login' | 'register') => void
	close: () => void
}

export const useAuthModal = create<AuthModalState>(set => ({
	status: {
		isActive: false,
		activeTab: 'login',
	},
	open: (tab: 'login' | 'register') =>
		set(state => ({
			status: {
				activeTab: tab,
				isActive: true,
			},
		})),
	close: () =>
		set(state => ({
			status: {
				isActive: false,
				activeTab: 'register',
			},
		})),
}))
