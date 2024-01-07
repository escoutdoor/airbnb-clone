import { create } from 'zustand'

type ActiveTab = 'login' | 'register'

type AuthModalState = {
	status: {
		isActive: boolean
		activeTab: ActiveTab
	}
	open: (tab: ActiveTab) => void
	close: () => void
}

export const useAuthModal = create<AuthModalState>(set => ({
	status: {
		isActive: false,
		activeTab: 'login',
	},
	open: (tab: ActiveTab) =>
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
