import { create } from 'zustand'

type ActiveTab = 'delete' | 'rename'

type WishlistSettingsModalState = {
	status: {
		isActive: boolean
		activeTab: ActiveTab
		apartmentId: string
		name: string
	}
	changeTab: (tab: ActiveTab) => void
	open: ({ apartmentId, name }: { apartmentId: string; name: string }) => void
	close: () => void
}

export const useWishListSettingsModal = create<WishlistSettingsModalState>(
	set => ({
		status: {
			isActive: false,
			activeTab: 'delete',
			apartmentId: '',
			name: '',
		},
		changeTab: (tab: ActiveTab) =>
			set(state => ({
				status: {
					activeTab: tab,
					isActive: state.status.isActive,
					apartmentId: state.status.apartmentId,
					name: state.status.name,
				},
			})),
		open: ({ apartmentId, name }) => {
			set(() => ({
				status: {
					isActive: true,
					activeTab: 'delete',
					apartmentId,
					name,
				},
			}))
		},
		close: () =>
			set(() => ({
				status: {
					isActive: false,
					activeTab: 'delete',
					apartmentId: '',
					name: '',
				},
			})),
	})
)
