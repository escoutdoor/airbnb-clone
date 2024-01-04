'use client'

import styles from './filter-modal.module.scss'
import { FC } from 'react'
import { useCreateQuery } from '@/hooks/useCreateQuery'
import { useFilterModal } from '@/hooks/useFilterModal'
import { useRouter, useSearchParams } from 'next/navigation'
import { ApartmentType } from '@/shared/interfaces/apartment.interface'
import ModalContainer from '../modal-container/ModalContainer'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import CancelButton from '@/components/ui/cancel-button/CancelButton'
import PlaceTypeSelect from './place-type-select/PlaceTypeSelect'
import PriceRange from './price-range/PriceRange'
import RoomsBedsSelect from './rooms-beds-select/RoomsBedsSelect'
import AmenitiesSelect from './amenities-select/AmenitiesSelect'
import HostLanguageSelect from './host-language-select/HostLanguageSelect'

const FilterModal: FC = () => {
	const { isActive, close } = useFilterModal()
	const { createQuery } = useCreateQuery()
	const { push } = useRouter()

	const { get, getAll } = useSearchParams()

	const type = get('type') as ApartmentType | undefined
	const beds = get('beds') as string | undefined
	const bedrooms = get('bedrooms') as string | undefined
	const bathrooms = get('bathrooms') as string | undefined
	const amenities = getAll('amenities') as string[] | undefined
	const hostLanguages = getAll('hostLanguages') as string[] | undefined

	return (
		<ModalContainer
			close={close}
			title="Filters"
			isActive={isActive}
			modalName="filter"
			footer={
				<div className={styles.footer__container}>
					<CancelButton onClick={close}>Cancel</CancelButton>
					<DarkButton onClick={close}>Show places</DarkButton>
				</div>
			}
		>
			<PlaceTypeSelect
				value={type}
				onChange={e => push(createQuery({ name: 'type', value: e }))}
			/>
			<PriceRange />
			<RoomsBedsSelect
				bedrooms={bedrooms ? +bedrooms : undefined}
				beds={beds ? +beds : undefined}
				bathrooms={bathrooms ? +bathrooms : undefined}
			/>
			<AmenitiesSelect
				amenities={amenities}
				onChange={e =>
					push(
						createQuery({
							name: 'amenities',
							isArray: true,
							value: e,
						})
					)
				}
			/>
			<HostLanguageSelect
				hostLanguages={hostLanguages}
				onChange={e =>
					push(
						createQuery({
							name: 'hostLanguages',
							isArray: true,
							value: e,
						})
					)
				}
			/>
		</ModalContainer>
	)
}

export default FilterModal
