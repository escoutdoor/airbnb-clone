import { Type } from 'class-transformer'
import {
	ArrayMinSize,
	IsArray,
	IsEnum,
	IsNumber,
	IsObject,
	IsOptional,
	IsString,
	IsUUID,
	Min,
	MinLength,
	ValidateNested,
} from 'class-validator'

export enum ApartmentType {
	HOME = 'entire home',
	ROOM = 'room',
}

export class LocationDto {
	@IsNumber()
	latitude: number

	@IsNumber()
	longitude: number
}

export class ApartmentDto {
	@IsString({
		message: 'Name must be a string',
	})
	@MinLength(3, {
		message: 'Name is too short. Minimal length is 3 characters',
	})
	name: string

	@IsArray()
	@ArrayMinSize(1, {
		message: 'Apartment must have at least one image',
	})
	@IsString({ each: true })
	images: string[]

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	description: string[]

	@IsEnum(ApartmentType)
	type: string

	@IsNumber()
	@Min(0, { message: 'Price must be a positive number' })
	price: number

	@IsNumber()
	beds: number

	@IsNumber()
	bedrooms: number

	@IsNumber()
	bathrooms: number

	@IsNumber()
	maxGuests: number

	@IsArray()
	@ArrayMinSize(1, {
		message: 'At least one language must be provided',
	})
	@IsString({ each: true })
	hostLanguages: string[]

	@IsObject()
	@ValidateNested()
	@Type(() => LocationDto)
	location: LocationDto

	@IsUUID()
	@IsString({
		message: 'Category id must be a string',
	})
	@MinLength(3, {
		message: 'Category is too short. Minimal length is 3 characters',
	})
	categoryId: string
}
