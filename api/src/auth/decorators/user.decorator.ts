import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User } from '@prisma/client'

export const CurrentUser = createParamDecorator(
	(key: keyof User, ctx: ExecutionContext) => {
		const { user } = ctx.switchToHttp().getRequest()

		return key ? user[key] : user
	}
)
