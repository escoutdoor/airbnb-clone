import {
	IsDateString,
	IsEmail,
	IsJWT,
	IsOptional,
	IsPhoneNumber,
	IsString,
	IsStrongPassword,
	MinLength,
} from 'class-validator'

export class LoginDto {
	@IsString({
		message: 'Email must be a string',
	})
	@IsEmail()
	email: string

	@IsString({
		message: 'Password must be a string',
	})
	@IsStrongPassword(
		{
			minLength: 6,
			minLowercase: 1,
			minUppercase: 1,
			minSymbols: 1,
			minNumbers: 1,
		},
		{
			message:
				'Password must be at least 6 characters long, and contain at least 1 lowercase letter, 1 uppercase letter, 1 number and 1 symbol',
		}
	)
	password: string
}

export class RegisterDto extends LoginDto {
	@IsString()
	@MinLength(2, {
		message: 'First name must be at least 2 characters long',
	})
	firstName: string

	@IsString()
	@MinLength(2, {
		message: 'Surname must be at least 2 characters long',
	})
	surName: string

	@IsDateString()
	dateOfBirth: Date

	@IsOptional()
	@IsString()
	avatar: string

	@IsString({
		message: 'Phone number must be a string',
	})
	@IsPhoneNumber('UA')
	phoneNumber: string
}

export class AccessTokenDto {
	@IsString({
		message: 'Refresh token must be a string',
	})
	@IsJWT({
		message: 'Refresh token must be a JWT',
	})
	refreshToken: string
}
