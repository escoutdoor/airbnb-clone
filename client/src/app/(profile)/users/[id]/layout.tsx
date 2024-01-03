import { ReactNode } from 'react'
import { Metadata } from 'next'
import { UserService } from '@/services/user/user.service'
import { getName } from '@/utils/get-name'

interface Params {
	id: string
}

export const generateMetadata = async (params: {
	params: Params
}): Promise<Metadata> => {
	const {
		params: { id },
	} = params
	const { data: user } = await UserService.getById(id)

	return {
		title: getName(user),
	}
}

export default function UserLayout({ children }: { children: ReactNode }) {
	return <>{children}</>
}
