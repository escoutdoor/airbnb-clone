import {
	AbilityBuilder,
	ExtractSubjectType,
	PureAbility,
	ConditionsMatcher,
	RawRuleOf,
} from '@casl/ability'
import {
	PrismaQuery,
	Subjects,
	createPrismaAbility,
	prismaQuery,
} from '@casl/prisma'
import { Injectable } from '@nestjs/common'
import { Apartment, Category, Prisma, User, Wishlist } from '@prisma/client'

export enum Action {
	Manage = 'manage',
	Create = 'create',
	Read = 'read',
	Update = 'update',
	Delete = 'delete',
}

export type AppSubjects =
	| Subjects<{
			User: User
			Category: Category
			Wishlist: Wishlist
			Apartment: Apartment
	  }>
	| 'all'

export type AppAbility = PureAbility<[Action, AppSubjects], PrismaQuery>

const AppAbility = new AbilityBuilder<AppAbility>(createPrismaAbility)

@Injectable()
export class AbilityFactory {
	async defineAbility(user: User) {
		const isAdmin = user.role === 'ADMIN'

		const { can, cannot, build } = AppAbility

		if (isAdmin) {
			can(Action.Manage, 'all')
		} else {
			cannot(Action.Read, 'Wishlist').because('You must be an admin')
		}

		const ability = build({
			detectSubjectType: item =>
				item.constructor as ExtractSubjectType<AppAbility>,
		})

		return ability
	}
}
