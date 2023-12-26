import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ReviewService } from './review.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { ReviewDto } from './review.dto'
import { CheckAbilities } from 'src/ability/ability.decorator'
import { Action } from 'src/ability/ability.factory'

@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Auth()
	@UsePipes(new ValidationPipe())
	@Post(':id')
	async create(
		@Param('id') apartmentId: string,
		@CurrentUser('id') userId: string,
		@Body() dto: ReviewDto
	) {
		return this.reviewService.create(apartmentId, userId, dto)
	}

	@Get(':id')
	async getById(@Param('id') reviewId: string) {
		return this.reviewService.getById(reviewId)
	}

	@Get('/apartment/:id')
	async getAll(@Param('id') apartmentId: string) {
		return this.reviewService.getAll(apartmentId)
	}

	@Auth()
	@CheckAbilities({ action: Action.Delete, subject: 'Review' })
	@Delete(':id')
	async delete(@Param('id') reviewId: string) {
		return this.reviewService.delete(reviewId)
	}
}
