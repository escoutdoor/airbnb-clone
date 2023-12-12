'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'

const Provider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const queryClient = new QueryClient()

	return (
		<>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</>
	)
}

export default Provider
