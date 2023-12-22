import {
	Injectable,
	NotFoundException,
	ForbiddenException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { wishlistSelect } from './wishlist.select'
import { WishlistDto } from './wishlist.dto'
import { ApartmentService } from 'src/apartment/apartment.service'

@Injectable()
export class WishlistService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly apartment: ApartmentService
	) {}

	async getAll() {
		return await this.prisma.wishlist.findMany({
			select: wishlistSelect,
		})
	}

	async getById(wishlistId: string, userId: string) {
		const wishlist = await this.prisma.wishlist.findUnique({
			where: { id: wishlistId },
			select: wishlistSelect,
		})

		if (!wishlist) {
			throw new NotFoundException('Wishlist not found')
		}

		if (wishlist.userId !== userId) {
			throw new ForbiddenException(
				'Access denied: you are not the owner of this wishlist'
			)
		}

		return wishlist
	}

	async create(userId: string, dto: WishlistDto) {
		return await this.prisma.wishlist.create({
			data: {
				...dto,
				user: {
					connect: { id: userId },
				},
			},
			select: wishlistSelect,
		})
	}

	async delete(wishlistId: string, userId: string) {
		const wishlist = await this.getById(wishlistId, userId)

		await this.prisma.wishlist.delete({
			where: { id: wishlist.id },
			select: wishlistSelect,
		})

		return 'Wishlist deleted'
	}

	async update(wishlistId: string, userId: string, dto: WishlistDto) {
		const wishlist = await this.getById(wishlistId, userId)

		return await this.prisma.wishlist.update({
			where: { id: wishlist.id },
			data: dto,
			select: wishlistSelect,
		})
	}

	async toggleApartment(
		wishlistId: string,
		userId: string,
		apartmentId: string
	) {
		const wishlist = await this.getById(wishlistId, userId)

		const apartment = await this.apartment.getById(apartmentId)

		const isExists = wishlist.apartments.some(
			item => item.id === apartment.id
		)

		return await this.prisma.wishlist.update({
			where: { id: wishlist.id },
			data: {
				apartments: {
					[isExists ? 'disconnect' : 'connect']: {
						id: apartment.id,
					},
				},
			},
			select: wishlistSelect,
		})
	}
}
