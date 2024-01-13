'use client'

interface ErrorProps {
	error: Error
	reset: () => void
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
	return (
		<div className="error">
			<h1>Oops!</h1>
			<p>{error.message}</p>
			<button onClick={reset}>Go Home</button>
		</div>
	)
}

export default ErrorPage
