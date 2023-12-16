import {
	IsDateString,
	IsEmail,
	IsOptional,
	IsPhoneNumber,
	IsString,
	MinLength,
} from 'class-validator'

export class UserDto {
	@IsOptional()
	@IsString({
		message: 'Email must be a string',
	})
	@IsEmail()
	email: string

	@IsOptional()
	@IsString()
	@MinLength(2, {
		message: 'First name must be at least 2 characters long',
	})
	firstName: string

	@IsOptional()
	@IsString()
	@MinLength(2, {
		message: 'Surname must be at least 2 characters long',
	})
	surName: string

	@IsOptional()
	@IsDateString()
	dateOfBirth: Date

	@IsOptional()
	@IsString()
	avatar: string

	@IsOptional()
	@IsString({
		message: 'Phone number must be a string',
	})
	@IsPhoneNumber()
	phoneNumber: string
}
