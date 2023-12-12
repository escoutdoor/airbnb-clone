import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CategoryDto } from './category.dto'
import { categorySelect } from './category.select'

@Injectable()
export class CategoryService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll() {
		return await this.prisma.category.findMany({
			select: categorySelect,
		})
	}

	async getById(id: string) {
		const category = await this.prisma.category.findUnique({
			where: { id },
			select: categorySelect,
		})

		if (!category) {
			throw new NotFoundException('Category not found')
		}

		return category
	}

	async create(dto: CategoryDto) {
		return await this.prisma.category.create({
			data: dto,
			select: categorySelect,
		})
	}

	async update(id: string, dto: CategoryDto) {
		const category = await this.getById(id)

		return await this.prisma.category.update({
			where: { id },
			data: {
				...dto,
			},
			select: categorySelect,
		})
	}
}
