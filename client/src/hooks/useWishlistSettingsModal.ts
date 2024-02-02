import { create } from 'zustand'

type ActiveTab = 'delete' | 'rename' | 'main'

type WishlistSettingsModalState = {
	status: {
		isActive: boolean
		activeTab: ActiveTab
		wishlistId: string
		name: string
	}
	changeTab: (tab: ActiveTab) => void
	open: ({ wishlistId, name }: { wishlistId: string; name: string }) => void
	close: () => void
}

export const useWishListSettingsModal = create<WishlistSettingsModalState>(
	set => ({
		status: {
			isActive: false,
			activeTab: 'main',
			wishlistId: '',
			name: '',
		},
		changeTab: (tab: ActiveTab) =>
			set(state => ({
				status: {
					activeTab: tab,
					isActive: state.status.isActive,
					wishlistId: state.status.wishlistId,
					name: state.status.name,
				},
			})),
		open: ({ wishlistId, name }) => {
			set(() => ({
				status: {
					isActive: true,
					activeTab: 'main',
					wishlistId,
					name,
				},
			}))
		},
		close: () =>
			set(() => ({
				status: {
					isActive: false,
					activeTab: 'main',
					wishlistId: '',
					name: '',
				},
			})),
	})
)
