'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'

import { FC, PropsWithChildren } from 'react'

const Provider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const queryClient = new QueryClient()

	return (
		<>
			<SessionProvider>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
			</SessionProvider>
		</>
	)
}

export default Provider
