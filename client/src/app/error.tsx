'use client'

interface ErrorProps {
	error: Error
	reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => {
	return (
		<div className="error">
			<h1>Oops!</h1>
			<p>{error.message}</p>
			<button onClick={reset}>Try again</button>
		</div>
	)
}

export default Error
