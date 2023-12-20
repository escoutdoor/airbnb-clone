import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { LoginDto, RegisterDto } from './auth.dto'
import { User } from '@prisma/client'
import { userSelect } from 'src/user/user.select'
import { JwtService } from '@nestjs/jwt'
import { hash, verify } from 'argon2'

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly jwt: JwtService
	) {}

	async register(dto: RegisterDto) {
		const isExists = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
			select: userSelect,
		})

		if (isExists) {
			throw new BadRequestException('User already exists')
		}

		const user = await this.prisma.user.create({
			data: {
				...dto,
				password: await hash(dto.password),
			},
			select: userSelect,
		})

		return await this.authenticateUser(user)
	}

	async login(dto: LoginDto) {
		const user = await this.validateUser(dto.email)

		const isValidPassword = await verify(user.password, dto.password)

		if (!isValidPassword) {
			throw new UnauthorizedException('Invalid password')
		}

		return await this.authenticateUser(user)
	}

	async accessToken(refreshToken: string) {
		const data = this.jwt.verify(refreshToken)

		if (!data) {
			throw new UnauthorizedException('Invalid refresh token')
		}

		const user = await this.validateUser(data.email)

		return await this.authenticateUser(user)
	}

	private async validateUser(email: string) {
		const user = await this.prisma.user.findUnique({
			where: { email },
		})

		if (!user) {
			throw new NotFoundException('User not found')
		}

		return user
	}

	private async authenticateUser(user: User) {
		const tokens = await this.generateTokens(user)

		return {
			user: {
				id: user.id,
				email: user.email,
			},
			...tokens,
		}
	}

	private async generateTokens(user: User) {
		const data = { id: user.id, email: user.email }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '1h',
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d',
		})

		return { accessToken, refreshToken }
	}
}
