import {
	ForbiddenException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { apartmentItemSelect, apartmentSelect } from './apartment.select'
import { ApartmentDto } from './apartment.dto'

@Injectable()
export class ApartmentService {
	constructor(private readonly prisma: PrismaService) {}

	async getById(id: string) {
		const apartment = await this.prisma.apartment.findUnique({
			where: { id },
			select: apartmentSelect,
		})

		if (!apartment) {
			throw new NotFoundException('Apartment not found')
		}

		return apartment
	}

	async getAll() {
		return await this.prisma.apartment.findMany({
			select: apartmentItemSelect,
		})
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
			select: apartmentSelect,
		})
	}

	async update(id: string, userId: string, dto: ApartmentDto) {
		const apartment = await this.getById(id)

		if (apartment.user.id !== userId) {
			throw new ForbiddenException(
				'Access denied: you are not the owner of this apartment'
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
			select: apartmentSelect,
		})
	}

	async delete(id: string, userId: string) {
		const apartment = await this.getById(id)

		if (apartment.user.id !== userId) {
			throw new ForbiddenException(
				'Access denied: you are not the owner of this apartment'
			)
		}

		await this.prisma.apartment.delete({
			where: { id },
		})

		return 'Apartment deleted'
	}
}
