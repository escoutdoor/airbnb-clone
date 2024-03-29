import {
	ForbiddenException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import {
	apartmentItemSelect,
	apartmentSelect,
	locationSelect,
} from './apartment.select'
import { reservationSelect } from 'src/reservation/reservation.select'
import { ApartmentDto } from './dto/apartment.dto'
import { reviewSelect } from 'src/review/review.select'
import { userSelect } from 'src/user/user.select'
import { ApartmentFilterDto } from './dto/apartment-filter.dto'
import { Prisma } from '@prisma/client'

@Injectable()
export class ApartmentService {
	constructor(private readonly prisma: PrismaService) {}

	async getById(id: string) {
		const apartment = await this.prisma.apartment.findUnique({
			where: { id },
			select: {
				...apartmentSelect,
				location: {
					select: locationSelect,
				},
				reviews: {
					select: reviewSelect,
				},
				user: {
					select: userSelect,
				},
				reservations: {
					select: reservationSelect,
				},
			},
		})

		if (!apartment) {
			throw new NotFoundException('Apartment not found')
		}

		const rating = await this.prisma.$queryRaw<
			{ rating: string }[]
		>`SELECT round(avg(rev.rating)) as rating FROM "Apartment" apart Join "Review" rev on rev.apartment_id = apart.id where apart.id = ${apartment.id} limit 1`

		return {
			...apartment,
			rating: +rating[0].rating,
		}
	}

	async getAll(dto: ApartmentFilterDto) {
		const apartments = await this.prisma.apartment.findMany({
			where: await this.getWhereOptions(dto),
			select: {
				...apartmentItemSelect,
				location: {
					select: locationSelect,
				},
			},
		})

		const total = await this.prisma.apartment.count({
			where: await this.getWhereOptions(dto),
		})

		return {
			apartments,
			total,
		}
	}

	private async getWhereOptions(dto: ApartmentFilterDto) {
		const where: Prisma.ApartmentWhereInput = dto.searchTerm
			? {
					OR: [
						{
							name: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
						{
							location: {
								city: {
									contains: dto.searchTerm,
									mode: 'insensitive',
								},
								country: {
									contains: dto.searchTerm,
									mode: 'insensitive',
								},
							},
						},
						{
							description: {
								hasSome: [dto.searchTerm],
							},
						},
						{
							category: {
								name: {
									contains: dto.searchTerm,
									mode: 'insensitive',
								},
							},
						},
						{
							hostLanguages: {
								hasSome: [dto.searchTerm],
							},
						},
						{
							type: {
								contains: dto.searchTerm,
								mode: 'insensitive',
							},
						},
					],
				}
			: {}

		if (dto.amenities) {
			where.amenities = {
				hasEvery: dto.amenities,
			}
		}

		if (dto.hostLanguages) {
			where.hostLanguages = {
				hasSome: dto.hostLanguages,
			}
		}

		if (dto.bathrooms) {
			where.bathrooms = {
				gte: dto.bathrooms,
			}
		}

		if (dto.bedrooms) {
			where.bedrooms = {
				gte: dto.bedrooms,
			}
		}

		if (dto.beds) {
			where.beds = {
				gte: dto.beds,
			}
		}

		if (dto.category) {
			where.category = {
				name: {
					contains: dto.category,
					mode: 'insensitive',
				},
			}
		}

		if (dto.minPrice || dto.maxPrice) {
			where.price = {}

			if (dto.minPrice) {
				where.price.gte = dto.minPrice
			}

			if (dto.maxPrice) {
				where.price.lte = dto.maxPrice
			}
		}

		if (dto.maxGuests) {
			where.maxGuests = {
				gte: dto.maxGuests,
			}
		}

		if (dto.type) {
			where.type = {
				contains: dto.type,
				mode: 'insensitive',
			}
		}

		if (dto.endDate || dto.startDate) {
			where.reservations = {}

			if (dto.endDate) {
				where.reservations.every.endDate = {
					lte: dto.endDate,
				}
			}

			if (dto.startDate) {
				where.reservations.every.startDate = {
					gte: dto.startDate,
				}
			}
		}

		return where
	}

	async create(userId: string, dto: ApartmentDto) {
		return await this.prisma.apartment.create({
			data: {
				...dto,
				location: {
					create: dto.location,
				},
				userId,
			},
			select: {
				...apartmentSelect,
				location: {
					select: locationSelect,
				},
			},
		})
	}

	async update(id: string, userId: string, dto: ApartmentDto) {
		const apartment = await this.getById(id)

		if (apartment.user.id !== userId) {
			throw new ForbiddenException(
				'Access denied: you are not the owner of this apartment',
			)
		}

		return await this.prisma.apartment.update({
			where: { id },
			data: {
				...dto,
				location: {
					update: dto.location,
				},
			},
			select: {
				...apartmentSelect,
				location: {
					select: locationSelect,
				},
			},
		})
	}

	async delete(id: string, userId: string) {
		const apartment = await this.getById(id)

		if (apartment.user.id !== userId) {
			throw new ForbiddenException(
				'Access denied: you are not the owner of this apartment',
			)
		}

		await this.prisma.apartment.delete({
			where: { id },
		})

		return 'Apartment deleted'
	}
}
