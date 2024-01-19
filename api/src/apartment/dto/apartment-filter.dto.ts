import {
	IsArray,
	IsEnum,
	IsNumber,
	IsOptional,
	IsString,
	Min,
} from 'class-validator'
import { ApartmentType } from './apartment.dto'
import { Transform } from 'class-transformer'

export class ApartmentFilterDto {
	@IsOptional()
	@IsString()
	searchTerm?: string

	@IsOptional()
	@IsString()
	category?: string

	@IsOptional()
	@IsString({
		message: 'Type must be a string',
	})
	@IsEnum(ApartmentType)
	type?: ApartmentType

	@IsOptional()
	@Transform(({ value }) => +value)
	@IsNumber()
	@Min(10, {
		message: 'Min price must be greater than or equal to 10$',
	})
	minPrice?: number

	@IsOptional()
	@Transform(({ value }) => +value)
	@IsNumber()
	@Min(10, {
		message: 'Max price must be greater than or equal to 10$',
	})
	maxPrice?: number

	@IsOptional()
	@Transform(({ value }) => +value)
	@IsNumber()
	@Min(1, {
		message: 'Bedrooms must be greater than or equal to 1',
	})
	bedrooms?: number

	@IsOptional()
	@Transform(({ value }) => +value)
	@IsNumber()
	@Min(1, {
		message: 'Beds must be greater than or equal to 1',
	})
	beds?: number

	@IsOptional()
	@Transform(({ value }) => +value)
	@IsNumber()
	@Min(1, {
		message: 'Bathrooms must be greater than or equal to 1',
	})
	bathrooms?: number

	@IsOptional()
	@Transform(({ value }) => +value)
	@IsNumber()
	@Min(1, {
		message: 'Max guests must be greater than or equal to 1',
	})
	maxGuests?: number

	@IsOptional()
	@Transform(({ value }) => value?.split(',')?.map(v => v?.trim()))
	@IsArray()
	amenities?: string[]

	@IsOptional()
	@Transform(({ value }) => value?.split(',')?.map(v => v?.trim()))
	@IsArray()
	hostLanguages?: string[]

	@IsOptional()
	@IsString()
	endDate?: string

	@IsOptional()
	@IsString()
	startDate?: string
}
