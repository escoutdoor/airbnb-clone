import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateReservationDto } from './dto/reservation.dto'
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

	async create(
		dto: CreateReservationDto,
		userId: string,
		apartmentId: string,
	) {
		const apartment = await this.apartmentService.getById(apartmentId)

		const isValid = apartment.reservations.every(
			reservation =>
				(reservation.startDate.getTime() <= dto.startDate.getTime() &&
					dto.startDate.getTime() <= reservation.endDate.getTime()) ||
				(reservation.startDate.getTime() <= dto.endDate.getTime() &&
					reservation.endDate.getTime() >= dto.endDate.getTime()),
		)

		if (!isValid) {
			throw new BadRequestException("You can't reserve this place")
		}

		await this.prisma.reservation.create({
			data: {
				...dto,
				userId,
				apartmentId,
			},
		})

		return 'Reservation created'
	}
}
