import {
	Body,
	Controller,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './auth.dto'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('register')
	async register(@Body() dto: RegisterDto) {
		return await this.authService.register(dto)
	}

	@UsePipes(new ValidationPipe())
	@Post('login')
	async login(@Body() dto: LoginDto) {
		return await this.authService.login(dto)
	}
}
