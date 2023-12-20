import { AbilityBuilder, ExtractSubjectType, PureAbility } from '@casl/ability'
import { PrismaQuery, Subjects, createPrismaAbility } from '@casl/prisma'
import { Injectable } from '@nestjs/common'
import {
	Apartment,
	Category,
	Location,
	Reservation,
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
	| 'all'
	| Subjects<{
			User: User
			Category: Category
			Apartment: Apartment
			Reservation: Reservation
			Wishlist: Wishlist
			Location: Location
			Review: Review
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
			can([Action.Read, Action.Update], 'User')

			can(Action.Read, 'Category')
			cannot(
				[Action.Update, Action.Create, Action.Delete],
				'Category'
			).because('Only admin can do this')

			can([Action.Read, Action.Create], 'Apartment')
			can([Action.Update, Action.Delete], 'Apartment', {
				userId: user.id,
			})

			can([Action.Read, Action.Create], 'Reservation')
			can([Action.Update, Action.Delete], 'Reservation', {
				userId: user.id,
			})

			can([Action.Read, Action.Create], 'Wishlist')
			can([Action.Update, Action.Delete], 'Wishlist', {
				userId: user.id,
			})

			can([Action.Read, Action.Create], 'Review')
			can([Action.Update], 'Review', {
				userId: user.id,
			})
		}

		return build({
			detectSubjectType: item =>
				item.constructor as unknown as ExtractSubjectType<AppSubjects>,
		})
	}
}
