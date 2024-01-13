'use client'

import styles from './filter-modal.module.scss'
import { FC, useEffect, useState } from 'react'
import { useFilterModal } from '@/hooks/useFilterModal'
import { useFilterApartments } from '@/hooks/useFilterApartments'
import { IApartmentFilterParams } from '@/services/apartment/apartment-params.interface'
import { usePathname, useRouter } from 'next/navigation'
import { ApartmentType } from '@/shared/interfaces/apartment.interface'
import { BeatLoader } from 'react-spinners'
import ModalContainer from '../modal-container/ModalContainer'
import CancelButton from '@/components/ui/cancel-button/CancelButton'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import PlaceTypeSelector from './place-type-selector/PlaceTypeSelector'
import PriceRange from './price-range/PriceRange'
import RoomsBedsSelect from './rooms-beds-select/RoomsBedsSelect'
import AmenitiesSelect from './amenities-select/AmenitiesSelect'
import HostLanguageSelect from './host-language-select/HostLanguageSelect'
import qs from 'qs'

type FilterModalProps = {
	searchParams?: { [key: string]: string | string[] | undefined }
}

const FilterModal: FC<FilterModalProps> = ({ searchParams }) => {
	const { close, isActive } = useFilterModal()
	const { push } = useRouter()
	const pathname = usePathname()

	const [filter, setFilter] = useState<IApartmentFilterParams>({
		...searchParams,
	})

	const { total, isFetching } = useFilterApartments({ ...filter })

	const handleClear = () => {
		setFilter({})
	}

	const handleSubmit = () => {
		const query = qs.stringify(
			{ ...filter },
			{ arrayFormat: 'repeat', skipNulls: true }
		)

		push(`${pathname}?${query}`)
		close()
	}

	const handleAmenitiesChange = (value: string) => {
		let amenities = [...(filter.amenities || [])] || []
		const isExist = amenities.find(amenity => amenity === value)

		if (isExist) {
			amenities = amenities.filter(amenity => amenity !== value)
		} else {
			amenities = [...amenities, value]
		}

		setFilter({ ...filter, amenities })
	}

	const handleLanguageChange = (value: string) => {
		let hostLanguages = [...(filter.hostLanguages || [])] || []
		const isExist = hostLanguages.find(language => language === value)

		if (isExist) {
			hostLanguages = hostLanguages.filter(language => language !== value)
		} else {
			hostLanguages = [...hostLanguages, value]
		}

		setFilter({ ...filter, hostLanguages })
	}

	const handlePrice = (values: number[]) => {
		const [minPrice, maxPrice] = values

		setFilter({
			...filter,
			minPrice: minPrice.toString(),
			maxPrice: maxPrice.toString(),
		})
	}

	useEffect(() => {
		if (!isActive) return

		setFilter({ ...(searchParams as IApartmentFilterParams) })
	}, [searchParams])

	return (
		<ModalContainer
			close={close}
			isActive={isActive}
			modalName="filter"
			title="Filters"
			footer={
				<div className={styles.footer}>
					<CancelButton onClick={handleClear}>Clear</CancelButton>
					<DarkButton onClick={handleSubmit}>
						{isFetching ? (
							<BeatLoader color="#fff" size={8} />
						) : total ? (
							<>
								Show {total}{' '}
								{filter.type === 'room'
									? 'room'
									: filter.type === 'entire home'
									? 'home'
									: 'place'}
								{total > 1 ? 's' : ''}
							</>
						) : (
							'No exact matches'
						)}
					</DarkButton>
				</div>
			}
		>
			<PlaceTypeSelector
				value={filter.type}
				onChange={(value?: ApartmentType) =>
					setFilter({ ...filter, type: value })
				}
			/>
			<PriceRange
				onChange={handlePrice}
				values={[
					filter.minPrice ? +filter.minPrice : 10,
					filter.maxPrice ? +filter.maxPrice : 1000,
				]}
			/>
			<RoomsBedsSelect
				bedrooms={filter.bedrooms ? +filter.bedrooms : undefined}
				beds={filter.beds ? +filter.beds : undefined}
				bathrooms={filter.bathrooms ? +filter.bathrooms : undefined}
				maxGuests={filter.maxGuests ? +filter.maxGuests : undefined}
				setFilter={setFilter}
			/>
			<AmenitiesSelect
				onChange={handleAmenitiesChange}
				amenities={filter.amenities || []}
			/>
			<HostLanguageSelect
				hostLanguages={filter.hostLanguages || []}
				onChange={handleLanguageChange}
			/>
		</ModalContainer>
	)
}

export default FilterModal
