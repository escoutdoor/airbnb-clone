import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ReservationService } from './reservation.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { CreateReservationDto } from './dto/reservation.dto'

@Controller('reservations')
export class ReservationController {
	constructor(private readonly reservationService: ReservationService) {}

	@Auth()
	@Get(':id')
	async getById(
		@Param('id') reservationId: string,
		@CurrentUser('id') userId: string,
	) {
		return await this.reservationService.getById(reservationId, userId)
	}

	@Auth()
	@UsePipes(new ValidationPipe())
	@Post(':id')
	async create(
		@Body() dto: CreateReservationDto,
		@CurrentUser('id') userId: string,
		@Param(':id') apartmentId: string,
	) {
		return await this.reservationService.create(dto, userId, apartmentId)
	}
}
