import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { AccessTokenDto, LoginDto, RegisterDto } from './auth.dto'
import { Auth } from './decorators/auth.decorator'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(HttpStatus.OK)
	@Post('login')
	async login(@Body() dto: LoginDto) {
		return this.authService.login(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(HttpStatus.OK)
	@Post('register')
	async register(@Body() dto: RegisterDto) {
		return this.authService.register(dto)
	}

	@Auth('USER')
	@UsePipes(new ValidationPipe())
	@HttpCode(HttpStatus.OK)
	@Post('access-token')
	async accessToken(@Body() dto: AccessTokenDto) {
		return this.authService.accessToken(dto.refreshToken)
	}
}
