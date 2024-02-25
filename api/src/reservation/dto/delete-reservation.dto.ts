import { IsString, IsUUID } from 'class-validator'

export class DeleteReservationDto {
	@IsUUID()
	@IsString({
		message: 'Apartment id needs to be a string',
	})
	reservationId: string
}
