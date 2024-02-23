import { Prisma } from '@prisma/client'

export const reservationSelect: Prisma.ReservationSelect = {
	id: true,
	startDate: true,
	endDate: true,
	createdAt: true,
	guests: true,
	totalPrice: true,
	userId: true,
	apartmentId: true,
}
