'use client'

import styles from './wishlist-modal.module.scss'
import { FC } from 'react'
import { useWishListModal } from '@/hooks/useWishListModal'
import { TWishlistSchema, wishlistSchema } from '@/lib/schemas/wishlist.schema'
import { useProfile } from '@/hooks/useProfile'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateWishlist } from '@/hooks/useCreateWishlist'
import { useToggleWishlist } from '@/hooks/useToggleWishlist'
import ModalContainer from '../modal-container/ModalContainer'
import WishlistItem from '@/components/ui/wishlist-item/WishlistItem'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import CancelButton from '@/components/ui/cancel-button/CancelButton'
import Field from '@/components/ui/field/Field'
import SmallText from '@/components/ui/small-text/SmallText'

const WishlistModal: FC = () => {
	const { profile } = useProfile()

	const { createWishlist } = useCreateWishlist()
	const { toggleWishlist } = useToggleWishlist()

	const {
		status: { activeTab, isActive, apartmentId },
		close,
		changeTab,
	} = useWishListModal()

	const {
		register,
		handleSubmit,
		formState: { isValid },
		watch,
		reset,
	} = useForm<TWishlistSchema>({
		mode: 'onChange',
		resolver: zodResolver(wishlistSchema),
		defaultValues: {
			name: '',
		},
	})

	const onSubmit: SubmitHandler<TWishlistSchema> = async data => {
		createWishlist(data)
		reset()
		changeTab('add')
	}

	return (
		<ModalContainer
			close={() => (activeTab === 'add' ? close() : changeTab('add'))}
			title="Add to wishlist"
			isActive={isActive}
			modalName="wishlist"
			footer={
				activeTab === 'add' ? (
					<div className={styles.adding__footer}>
						<DarkButton onClick={() => changeTab('create')}>
							Create new wishlist
						</DarkButton>
					</div>
				) : (
					<div className={styles.create__wishlist}>
						<CancelButton onClick={() => reset()}>
							Clear
						</CancelButton>
						<DarkButton
							disabled={!isValid}
							onClick={handleSubmit(onSubmit)}
						>
							Create
						</DarkButton>
					</div>
				)
			}
		>
			<div className={styles.container}>
				{activeTab === 'add' && (
					<ul className={styles.list}>
						{profile?.wishlists.map(wishlist => (
							<WishlistItem
								key={wishlist.id}
								item={wishlist}
								toggle={() => {
									toggleWishlist({
										wishlistId: wishlist.id,
										apartmentId,
									})
									close()
								}}
							/>
						))}
					</ul>
				)}
				{activeTab === 'create' && (
					<>
						<form>
							<Field
								{...register('name')}
								maxLength={50}
								label="Name"
							/>
						</form>
						<SmallText>
							{watch('name').length}/50 characters
						</SmallText>
					</>
				)}
			</div>
		</ModalContainer>
	)
}

export default WishlistModal
