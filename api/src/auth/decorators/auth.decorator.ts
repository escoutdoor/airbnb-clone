import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger'
import { applyDecorators } from '@nestjs/common'
import { AbilitiesGuard } from 'src/ability/abilities.guard'

export function Auth() {
	return applyDecorators(
		UseGuards(AuthGuard('jwt'), AbilitiesGuard),
		ApiBearerAuth(),
		ApiUnauthorizedResponse({ description: 'Unauthorized, please login' })
	)
}
