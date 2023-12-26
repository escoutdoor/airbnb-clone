import { IsNumber, IsString, Min, MinLength } from 'class-validator'

export class ReviewDto {
	@IsString({
		message: 'Review text must be a string',
	})
	@MinLength(3, {
		message: 'Review text must be at least 3 characters long',
	})
	text: string

	@IsNumber()
	@Min(1, {
		message: 'Rating must be greater than 0',
	})
	rating: number
}
