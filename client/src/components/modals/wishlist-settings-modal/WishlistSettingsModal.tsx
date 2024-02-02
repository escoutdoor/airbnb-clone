'use client'

import styles from './wishlist-settings-modal.module.scss'
import { FC } from 'react'
import ModalContainer from '../modal-container/ModalContainer'
import { useWishListSettingsModal } from '@/hooks/useWishlistSettingsModal'
import CancelButton from '@/components/ui/cancel-button/CancelButton'
import DarkButton from '@/components/ui/dark-button/DarkButton'
import { useDeleteWishlist } from '@/hooks/useDeleteWishlist'
import { useUpdateWishlist } from '@/hooks/useUpdateWishlist'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TWishlistSchema, wishlistSchema } from '@/lib/schemas/wishlist.schema'
import Field from '@/components/ui/field/Field'
import SmallText from '@/components/ui/small-text/SmallText'
import Text from '@/components/ui/text/Text'
import { FaChevronRight, FaRegTrashCan } from 'react-icons/fa6'
import { LuPencilLine } from 'react-icons/lu'
import { useRouter } from 'next/navigation'
import ParagraphHeading from '@/components/ui/headings/paragraph-heading/ParagraphHeading'

const WishlistSettingsModal: FC = () => {
	const { push } = useRouter()
	const {
		status: { activeTab, isActive, name, wishlistId },
		close,
		changeTab,
	} = useWishListSettingsModal()
	const { deleteWishlist } = useDeleteWishlist()
	const { updateWishlist } = useUpdateWishlist()

	const {
		formState: { errors, isValid },
		register,
		handleSubmit,
		watch,
	} = useForm<TWishlistSchema>({
		mode: 'onChange',
		resolver: zodResolver(wishlistSchema),
		values: {
			name,
		},
	})

	const updateSubmit: SubmitHandler<TWishlistSchema> = data => {
		updateWishlist({ data, wishlistId })
	}

	const handleDelete = () => {
		close()
		deleteWishlist(wishlistId)
		push('/wishlists')
	}

	return (
		<ModalContainer
			isActive={isActive}
			close={() =>
				activeTab === 'rename' || activeTab === 'delete'
					? changeTab('main')
					: close()
			}
			modalName="wishlist"
			title={
				activeTab === 'delete'
					? 'Delete wishlist'
					: activeTab === 'rename'
					? 'Rename wishlist'
					: 'Settings'
			}
			footer={
				activeTab === 'delete' ? (
					<div className={styles.footer}>
						<CancelButton onClick={() => changeTab('main')}>
							Cancel
						</CancelButton>
						<DarkButton onClick={handleDelete}>Delete</DarkButton>
					</div>
				) : activeTab === 'rename' ? (
					<div className={styles.footer}>
						<CancelButton onClick={() => changeTab('main')}>
							Cancel
						</CancelButton>
						<DarkButton
							disabled={!isValid}
							onClick={handleSubmit(updateSubmit)}
						>
							Save
						</DarkButton>
					</div>
				) : null
			}
		>
			<div className={styles.container}>
				{activeTab === 'main' && (
					<>
						<div
							className={styles.popover}
							onClick={() => changeTab('rename')}
						>
							<LuPencilLine className={styles.icon} />
							<div className={styles.right}>
								<Text>Rename</Text>
								<FaChevronRight className={styles.icon} />
							</div>
						</div>
						<div
							className={styles.popover}
							onClick={() => changeTab('delete')}
						>
							<FaRegTrashCan className={styles.icon} />
							<div className={styles.right}>
								<Text>Delete</Text>
								<FaChevronRight className={styles.icon} />
							</div>
						</div>
					</>
				)}
				{activeTab === 'rename' && (
					<>
						<form onSubmit={handleSubmit(updateSubmit)}>
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
				{activeTab === 'delete' && (
					<div className={styles.delete}>
						<ParagraphHeading>
							Delete this wishlist ?
						</ParagraphHeading>
						<Text>“{name}” will be permanently deleted</Text>
					</div>
				)}
			</div>
		</ModalContainer>
	)
}

export default WishlistSettingsModal
