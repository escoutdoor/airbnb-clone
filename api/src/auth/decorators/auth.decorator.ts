import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger'
import { applyDecorators } from '@nestjs/common'
import { AbilityGuard } from 'src/ability/ability.guard'

export function Auth() {
	return applyDecorators(
		UseGuards(AuthGuard('jwt'), AbilityGuard),
		ApiBearerAuth(),
		ApiUnauthorizedResponse({ description: 'Unauthorized, please login' })
	)
}
