import { UseGuards, SetMetadata } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger'
import { applyDecorators } from '@nestjs/common'
import { Role } from '@prisma/client'
import { RolesGuard } from '../guards/roles.guard'

export function Auth(...roles: Role[]) {
	return applyDecorators(
		SetMetadata('roles', roles),
		UseGuards(AuthGuard('jwt'), RolesGuard),
		ApiBearerAuth(),
		ApiUnauthorizedResponse({ description: 'Unauthorized' })
	)
}
