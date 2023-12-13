'use client'

import ApartmentList from '@/components/ui/apartment-list/ApartmentList'
import styles from './home.module.scss'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<div className={styles.home}>
			<div className="wrapper">
				<div className={styles.content}>
					<ApartmentList
						apartments={[
							{
								id: '1',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
							{
								id: '2',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
							{
								id: '3',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
							{
								id: '4',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
							{
								id: '5',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
							{
								id: '6',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
							{
								id: '7',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
							{
								id: '8',
								images: [
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
									'image.webp',
								],
								name: 'asa',
							},
						]}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
