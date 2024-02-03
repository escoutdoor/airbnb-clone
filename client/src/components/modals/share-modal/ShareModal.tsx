'use client'

import styles from './share-modal.module.scss'
import { FC } from 'react'
import { useShareModal } from '@/hooks/useShareModal'
import { MdOutlineFileCopy } from 'react-icons/md'
import ModalContainer from '../modal-container/ModalContainer'
import MediumHeading from '@/components/ui/headings/medium-heading/MediumHeading'

const ShareModal: FC = () => {
	const { isActive, close } = useShareModal()

	const copyToClipboard = () => {
		navigator.clipboard.writeText(window.location.toString())
	}

	return (
		<ModalContainer
			close={close}
			title="Share this place"
			isActive={isActive}
			modalName="share"
		>
			<div className={styles.variants}>
				<button className={styles.item} onClick={copyToClipboard}>
					<MdOutlineFileCopy className={styles.icon} />
					<MediumHeading>Copy link</MediumHeading>
				</button>
			</div>
		</ModalContainer>
	)
}

export default ShareModal
