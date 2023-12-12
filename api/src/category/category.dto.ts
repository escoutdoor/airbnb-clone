import { IsString, MinLength } from 'class-validator'

export class CategoryDto {
	@IsString()
	@MinLength(3, {
		message: 'Name is too short, minimum length is 3 characters',
	})
	name: string

	@IsString()
	image: string
}
