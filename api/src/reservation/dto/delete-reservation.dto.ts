import { IsString, IsUUID } from 'class-validator'

export class DeleteReservationDto {
	@IsUUID()
	@IsString({
		message: 'Reservation id needs to be a string',
	})
	reservationId: string
}
