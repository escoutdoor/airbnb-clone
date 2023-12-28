import { ModalState } from '@/shared/interfaces/modal.interface'
import { create } from 'zustand'

export const useFilterModal = create<ModalState>(set => ({
	isActive: false,
	open: () => set({ isActive: true }),
	close: () => set({ isActive: false }),
}))
