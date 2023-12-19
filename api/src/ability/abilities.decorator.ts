import { SetMetadata } from '@nestjs/common'
import { AppSubjects, Action } from './ability.factory'

export interface RequiredRule {
	action: Action
	subject: AppSubjects
}

export const CHECK_ABILITY = 'check_ability'

export const CheckAbilities = (...requirements: RequiredRule[]) =>
	SetMetadata(CHECK_ABILITY, requirements)
