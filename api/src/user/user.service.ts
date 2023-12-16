import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { userSelect } from './user.select'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
	constructor(private readonly prisma: PrismaService) {}

	async getProfile(id: string) {
		const user = await this.prisma.user.findUnique({
			where: { id },
			select: userSelect,
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		return user
	}

	async update(id: string, dto: UserDto) {
		const user = await this.getProfile(id)

		if (dto.email && dto.email !== user.email) {
			const isExists = await this.prisma.user.findUnique({
				where: { email: dto.email },
			})

			if (isExists) {
				throw new BadRequestException('Email already exists')
			}
		}

		return await this.prisma.user.update({
			where: { email: user.email },
			data: dto,
			select: userSelect,
		})
	}
}
