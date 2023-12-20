import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { wishlistSelect } from './wishlist.select'
import { WishlistDto } from './wishlist.dto'

@Injectable()
export class WishlistService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll() {
		return await this.prisma.wishlist.findMany({
			select: wishlistSelect,
		})
	}

	async getById(wishlistId: string) {
		const wishlist = await this.prisma.wishlist.findUnique({
			where: { id: wishlistId },
			select: wishlistSelect,
		})

		if (!wishlist) {
			throw new NotFoundException('Wishlist not found')
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

	async update(wishlistId: string, dto: WishlistDto) {
		const wishlist = await this.getById(wishlistId)

		return await this.prisma.wishlist.update({
			where: { id: wishlist.id },
			data: dto,
			select: wishlistSelect,
		})
	}
}
