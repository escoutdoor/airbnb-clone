'use client'

import styles from './filter-modal.module.scss'
import { FC } from 'react'
import { useCreateQuery } from '@/hooks/useCreateQuery'
import { useFilterModal } from '@/hooks/useFilterModal'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
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
	const { createQuery, removeQuery } = useCreateQuery()
	const { push } = useRouter()
	const pathname = usePathname()

	const { get, getAll } = useSearchParams()

	const type = get('type') as ApartmentType | undefined
	const beds = get('beds') as string | undefined
	const bedrooms = get('bedrooms') as string | undefined
	const bathrooms = get('bathrooms') as string | undefined
	const amenities = getAll('amenities') as string[] | undefined
	const hostLanguages = getAll('hostLanguages') as string[] | undefined
	const minPrice = get('minPrice') as string | undefined
	const maxPrice = get('maxPrice') as string | undefined

	const handlePrice = (values: number[]) => {
		push(
			`${pathname}?${new URLSearchParams({
				minPrice: values[0].toString(),
				maxPrice: values[1].toString(),
			})}`
		)
	}

	const handleClear = () => {
		push(pathname)
	}

	return (
		<ModalContainer
			close={close}
			title="Filters"
			isActive={isActive}
			modalName="filter"
			footer={
				<div className={styles.footer__container}>
					<CancelButton onClick={handleClear}>Clear all</CancelButton>
					<DarkButton onClick={close}>Show places</DarkButton>
				</div>
			}
		>
			<PlaceTypeSelect
				value={type}
				onChange={e => push(createQuery({ name: 'type', value: e }))}
			/>
			<PriceRange
				onChange={handlePrice}
				values={[
					minPrice ? +minPrice : 10,
					maxPrice ? +maxPrice : 1000,
				]}
			/>
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
