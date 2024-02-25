import { Transform } from 'class-transformer'
import {
	IsDate,
	IsDateString,
	IsNumber,
	IsString,
	IsUUID,
	Min,
	MinDate,
} from 'class-validator'

export class CreateReservationDto {
	@IsUUID()
	@IsString({
		message: 'Apartment id needs to be a string',
	})
	apartmentId: string

	@Transform(({ value }) => new Date(value))
	@IsDate()
	@MinDate(new Date())
	startDate: Date

	@Transform(({ value }) => new Date(value))
	@IsDate()
	@MinDate(new Date())
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
