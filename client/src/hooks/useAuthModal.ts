import { create } from 'zustand'

type ActiveTab = 'login' | 'register'

type AuthModalState = {
	status: {
		isActive: boolean
		activeTab: ActiveTab
	}
	changeTab: (tab: ActiveTab) => void
	open: (tab: ActiveTab) => void
	close: () => void
}

export const useAuthModal = create<AuthModalState>(set => ({
	status: {
		isActive: false,
		activeTab: 'login',
	},
	changeTab: (tab: ActiveTab) =>
		set(state => ({
			status: {
				activeTab: tab,
				isActive: true,
			},
		})),
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
