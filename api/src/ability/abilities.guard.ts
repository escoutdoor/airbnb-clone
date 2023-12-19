import {
	Injectable,
	CanActivate,
	ExecutionContext,
	ForbiddenException,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AbilityFactory } from './ability.factory'
import { CHECK_ABILITY, RequiredRule } from './abilities.decorator'
import { ForbiddenError } from '@casl/ability'
import { User } from '@prisma/client'

@Injectable()
export class AbilitiesGuard implements CanActivate {
	constructor(
		private reflector: Reflector,
		private readonly abilityFactory: AbilityFactory
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const rules =
			this.reflector.get<RequiredRule[]>(
				CHECK_ABILITY,
				context.getHandler()
			) || []

		const { user }: { user: User } = await context
			.switchToHttp()
			.getRequest()

		const ability = await this.abilityFactory.defineAbility(user)

		try {
			rules.forEach(rule =>
				ForbiddenError.from(ability).throwUnlessCan(
					rule.action,
					rule.subject
				)
			)

			return true
		} catch (error) {
			if (error instanceof ForbiddenError) {
				throw new ForbiddenException(error.message)
			}
		}
	}
}
