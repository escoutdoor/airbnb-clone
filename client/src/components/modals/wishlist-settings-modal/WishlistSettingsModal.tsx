import { FC } from 'react'
import ModalContainer from '../modal-container/ModalContainer'
import { useWishListSettingsModal } from '@/hooks/useWishlistSettingsModal'

const WishlistSettingsModal: FC = () => {
	const { status, close, changeTab } = useWishListSettingsModal()

	return (
		<ModalContainer
			isActive={status.isActive}
			close={close}
			modalName="wishlist"
		></ModalContainer>
	)
}

export default WishlistSettingsModal
