import Layout from '@/components/layout/Layout'
import { ReactNode } from 'react'

export default function ProfileLayout({ children }: { children: ReactNode }) {
	return <Layout size="medium">{children}</Layout>
}
