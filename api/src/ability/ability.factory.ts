import { AbilityBuilder, ExtractSubjectType, PureAbility } from '@casl/ability'
import { PrismaQuery, Subjects, createPrismaAbility } from '@casl/prisma'
import { Injectable } from '@nestjs/common'
import { Category, User } from '@prisma/client'

export enum Action {
	Manage = 'manage',
	Create = 'create',
	Read = 'read',
	Update = 'update',
	Delete = 'delete',
}

export type AppSubjects =
	| 'all'
	| Subjects<{
			User: User
			Category: Category
	  }>

export type AppAbility = PureAbility<[Action, AppSubjects], PrismaQuery>

@Injectable()
export class AbilityFactory {
	async defineAbility(user: User) {
		const iAdmin = user.role === 'ADMIN'

		const { can, cannot, build } = new AbilityBuilder<AppAbility>(
			createPrismaAbility
		)

		if (iAdmin) {
			can(Action.Manage, 'all')
		} else {
			can(Action.Read, 'User')
			can(Action.Update, 'User', { id: user.id })

			cannot(
				[Action.Create, Action.Update, Action.Delete],
				'Category'
			).because('Only admins can do it')
		}

		return build({
			detectSubjectType: item =>
				item.constructor as unknown as ExtractSubjectType<AppSubjects>,
		})
	}
}
