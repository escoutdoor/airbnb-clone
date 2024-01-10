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

	@IsString({
		message: 'Country must be a string',
	})
	@MinLength(2, {
		message: 'Country is too short. Minimal length is 2 characters',
	})
	country: string

	@IsString({
		message: 'City must be a string',
	})
	@MinLength(2, {
		message: 'City is too short. Minimal length is 2 characters',
	})
	city: string

	@IsString({
		message: 'Street must be a string',
	})
	@MinLength(2, {
		message: 'Street is too short. Minimal length is 2 characters',
	})
	street: string

	@IsNumber()
	@Min(1, { message: 'House number must be a positive number' })
	houseNumber: number

	@IsOptional()
	@IsNumber()
	apartmentNumber: number

	@IsString({
		message: 'Zip code must be a string',
	})
	@MinLength(5, {
		message: 'Zip code is too short. Minimal length is 5 characters',
	})
	zipCode: string
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
	@Min(10, {
		message: 'Price must be bigger than 10',
	})
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

	@IsArray({
		message: 'Amenities must be an array of strings',
	})
	@ArrayMinSize(1, {
		message: 'At least one amenity must be provided',
	})
	@IsString({ each: true })
	amenities: string[]

	@IsUUID()
	@IsString({
		message: 'Category id must be a string',
	})
	@MinLength(3, {
		message: 'Category is too short. Minimal length is 3 characters',
	})
	categoryId: string
}
