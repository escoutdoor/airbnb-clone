import { FC, PropsWithChildren } from 'react'

const Provider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <>{children}</>
}

export default Provider
