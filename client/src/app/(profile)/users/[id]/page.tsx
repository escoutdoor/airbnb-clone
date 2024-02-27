import User from '@/components/pages/user/User'
import { UserService } from '@/services/user/user.service'

export default async function UserPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const { data: user } = await UserService.getById(id)

	return <User user={user} />
}
