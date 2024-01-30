import Layout from '@/components/layout/Layout'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
	title: 'Account Settings',
	description: 'Modify your account settings',
}

export default function AccountSettingsLayout({
	children,
}: {
	children: ReactNode
}) {
	return (
		<>
			<Layout size="medium">{children}</Layout>
		</>
	)
}
