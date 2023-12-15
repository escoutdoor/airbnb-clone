import {
	Injectable,
	BadRequestException,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { LoginDto, RegisterDto } from './auth.dto'
import { userSelect } from 'src/user/user.select'
import { hash, verify } from 'argon2'
import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwt: JwtService
	) {}

	async register(dto: RegisterDto) {
		const isExist = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		})

		if (isExist) {
			throw new BadRequestException('User already exists')
		}

		const user = await this.prisma.user.create({
			data: {
				...dto,
				password: await hash(dto.password),
			},
			select: userSelect,
		})

		return {
			user: await this.getIdEmail(user),
			// ...(await this.generateTokens(user)),
		}
	}

	async login(dto: LoginDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
			select: userSelect,
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const isPasswordValid = await verify(user.password, dto.password)

		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid password')
		}

		return user

		// return {
		// 	user: await this.getIdEmail(user),
		// 	// ...(await this.generateTokens(user)),
		// }
	}

	async generateTokens(user: User) {
		const data = { id: user.id, email: user.email }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h',
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d',
		})

		return { accessToken, refreshToken }
	}

	async getIdEmail(user: User) {
		return { id: user.id, email: user.email }
	}
}
