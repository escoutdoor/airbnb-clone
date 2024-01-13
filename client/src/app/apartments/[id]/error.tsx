'use client'

import { useRouter } from 'next/navigation'

interface ErrorProps {
	error: Error
}

const ErrorApartmentPage = ({ error }: ErrorProps) => {
	const { replace } = useRouter()

	return (
		<div className="error">
			<h1>Apartment not found</h1>
			<button onClick={() => replace('/')}>Go Home</button>
		</div>
	)
}

export default ErrorApartmentPage
