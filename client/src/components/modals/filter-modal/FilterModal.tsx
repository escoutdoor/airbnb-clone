'use client'

import { useFilterModal } from '@/hooks/useFilterModal'
import ModalContainer from '../modal-container/ModalContainer'
import styles from './filter-modal.module.scss'
import { FC } from 'react'

const FilterModal: FC = () => {
	const { isActive, close } = useFilterModal()

	return (
		<ModalContainer close={close} title="Filters" isActive={isActive}>
			FILTER MODAL
		</ModalContainer>
	)
}

export default FilterModal
