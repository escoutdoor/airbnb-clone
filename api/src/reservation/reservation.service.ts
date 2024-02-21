import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateReservationDto } from './dto/reservation.dto'

@Injectable()
export class ReservationService {
	constructor(private readonly prisma: PrismaService) {}

	async getById(reservationId: string, userId: string) {
		const reservation = this.prisma.reservation.findUnique({
			where: {
				id: reservationId,
				userId,
			},
		})

		if (!reservation) {
			throw new NotFoundException('Reservation not found')
		}

		return reservation
	}

	async create(
		dto: CreateReservationDto,
		userId: string,
		apartmentId: string,
	) {}
}
