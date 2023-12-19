import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger'
import { applyDecorators } from '@nestjs/common'

export function Auth() {
	return applyDecorators(
		UseGuards(AuthGuard('jwt')),
		ApiBearerAuth(),
		ApiUnauthorizedResponse({ description: 'Unauthorized' })
	)
}
