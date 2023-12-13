import { ReactNode } from 'react'

export default function ProfileLayout({ children }: { children: ReactNode }) {
	return <div className="wrapper medium">{children}</div>
}
