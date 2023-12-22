import { SetMetadata } from '@nestjs/common'
import { Action, AppSubjects } from './ability.factory'

export type RequiredRule = {
	action: Action
	subject: AppSubjects
}

export const CHECK_ABILITY_KEY = 'check_ability_key'

export const CheckAbilities = (...requirements: RequiredRule[]) =>
	SetMetadata(CHECK_ABILITY_KEY, requirements)
