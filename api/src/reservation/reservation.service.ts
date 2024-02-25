import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateReservationDto } from './dto/create-reservation.dto'
import { ApartmentService } from 'src/apartment/apartment.service'
import { reservationSelect } from './reservation.select'

@Injectable()
export class ReservationService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly apartmentService: ApartmentService,
	) {}

	async getById(reservationId: string, userId: string) {
		const reservation = await this.prisma.reservation.findUnique({
			where: {
				id: reservationId,
				userId,
			},
			select: reservationSelect,
		})

		if (!reservation) {
			throw new NotFoundException('Reservation not found')
		}

		return reservation
	}

	async create(dto: CreateReservationDto, userId: string) {
		if (dto.startDate.getTime() > dto.endDate.getTime()) {
			throw new BadRequestException(
				'Start date must be less than end one',
			)
		}

		const apartment = await this.apartmentService.getById(dto.apartmentId)

		const isExists = await this.checkIsExists(
			dto.startDate,
			dto.endDate,
			apartment.id,
		)

		if (isExists) {
			throw new BadRequestException(
				'This place is already reserved for these days',
			)
		}

		await this.prisma.reservation.create({
			data: {
				...dto,
				userId,
				apartmentId: apartment.id,
			},
		})

		return 'Reservation created'
	}

	async delete(reservationId: string, userId: string) {
		const reservation = await this.getById(reservationId, userId)

		await this.prisma.reservation.delete({
			where: {
				id: reservation.id,
				userId,
			},
		})

		return 'Reservation deleted'
	}

	private async checkIsExists(
		startDate: Date,
		endDate: Date,
		apartmentId: string,
	) {
		const reservation = await this.prisma.reservation.findFirst({
			where: {
				apartmentId,
				OR: [
					{
						startDate: { lte: startDate },
						endDate: { gte: startDate },
					},
					{
						startDate: { lte: endDate },
						endDate: { gte: endDate },
					},
				],
			},
		})

		return reservation
	}
}
