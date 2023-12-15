import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { apartmentSelect } from './apartment.select'
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
			select: apartmentSelect,
		})
	}

	async create(dto: ApartmentDto) {
		return await this.prisma.apartment.create({
			data: {
				...dto,
				location: {
					create: dto.location,
				},
			},
			select: apartmentSelect,
		})
	}

	async update(id: string, dto: ApartmentDto) {
		const apartment = await this.getById(id)

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

	async delete(id: string) {
		const apartment = await this.getById(id)

		await this.prisma.apartment.delete({
			where: { id },
		})

		return 'Apartment deleted'
	}
}
