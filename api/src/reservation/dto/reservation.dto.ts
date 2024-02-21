import { IsDateString, IsNumber, Min, MinDate } from 'class-validator'

export class CreateReservationDto {
	@MinDate(new Date())
	@IsDateString()
	startDate: Date

	@MinDate(new Date(new Date().getDate() + 1))
	@IsDateString()
	endDate: Date

	@IsNumber()
	@Min(10, {
		message: 'Min price = 10$',
	})
	totalPrice: number

	@IsNumber()
	@Min(1, {
		message: 'Should be at least one guest',
	})
	guests: number
}
