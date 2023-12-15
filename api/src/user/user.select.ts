import { Prisma } from '@prisma/client'

export const userSelect: Prisma.UserSelect = {
	id: true,
	firstName: true,
	surName: true,
	avatar: true,
	dateOfBirth: true,
	email: true,
	phoneNumber: true,
	role: true,
}
