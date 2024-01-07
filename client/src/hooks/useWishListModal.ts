import { create } from 'zustand'

type ActiveTab = 'add' | 'create'

type WishlistModalState = {
	status: {
		isActive: boolean
		activeTab: ActiveTab
		apartmentId: string
	}
	changeTab: (tab: ActiveTab) => void
	open: (apartmentId: string) => void
	close: () => void
}

export const useWishListModal = create<WishlistModalState>(set => ({
	status: {
		isActive: false,
		activeTab: 'add',
		apartmentId: '',
	},
	changeTab: (tab: ActiveTab) =>
		set(state => ({
			status: {
				activeTab: tab,
				isActive: state.status.isActive,
				apartmentId: state.status.apartmentId,
			},
		})),
	open: (apartmentId: string) => {
		set(() => ({
			status: {
				isActive: true,
				activeTab: 'add',
				apartmentId,
			},
		}))
	},
	close: () =>
		set(() => ({
			status: {
				isActive: false,
				activeTab: 'add',
				apartmentId: '',
			},
		})),
}))
