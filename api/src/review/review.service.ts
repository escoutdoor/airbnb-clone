import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { ReviewDto } from './review.dto'
import { ApartmentService } from 'src/apartment/apartment.service'
import { reviewSelect } from './review.select'

@Injectable()
export class ReviewService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly user: UserService,
		private readonly apartment: ApartmentService
	) {}

	async create(apartmentId: string, userId: string, dto: ReviewDto) {
		const user = await this.user.getProfile(userId)

		const apartment = await this.apartment.getById(apartmentId)

		return await this.prisma.review.create({
			data: {
				...dto,
				userId: user.id,
				apartmentId: apartment.id,
			},
			select: reviewSelect,
		})
	}

	async getById(reviewId: string) {
		const review = await this.prisma.review.findUnique({
			where: {
				id: reviewId,
			},
			select: reviewSelect,
		})

		if (!review) {
			throw new NotFoundException('Review not found')
		}

		return review
	}

	async getAll(apartmentId: string) {
		const apartment = await this.apartment.getById(apartmentId)

		return await this.prisma.review.findMany({
			where: {
				apartmentId: apartment.id,
			},
			select: reviewSelect,
		})
	}

	async delete(reviewId: string) {
		const review = await this.getById(reviewId)

		await this.prisma.review.delete({
			where: {
				id: review.id,
			},
		})

		return 'Review deleted successfully'
	}
}
