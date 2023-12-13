import { ReactNode } from 'react'

export default function ApartmentLayout({ children }: { children: ReactNode }) {
	return <div className="wrapper small">{children}</div>
}
