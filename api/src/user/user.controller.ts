import {
	Body,
	Controller,
	Get,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { UserDto } from './user.dto'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Auth()
	@Get('')
	async getProfile(@CurrentUser('id') id: string) {
		return await this.userService.getProfile(id)
	}

	@Auth()
	@UsePipes(new ValidationPipe())
	@Put('')
	async update(@CurrentUser('id') id: string, @Body() dto: UserDto) {
		return await this.userService.update(id, dto)
	}
}
