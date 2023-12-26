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
import {
	Apartment,
	Category,
	Prisma,
	Review,
	User,
	Wishlist,
} from '@prisma/client'

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
			Review: Review
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
			can(Action.Read, 'Category')
			cannot(
				[Action.Create, Action.Update, Action.Delete],
				'Category'
			).because('You must be an admin')

			cannot(Action.Read, 'Wishlist').because('You must be an admin')

			cannot(Action.Delete, 'Review').because(
				'You must be an admin to delete reviews'
			)
		}

		const ability = build({
			detectSubjectType: item =>
				item.constructor as ExtractSubjectType<AppAbility>,
		})

		return ability
	}
}
