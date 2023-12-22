import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { WishlistService } from './wishlist.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { WishlistDto } from './wishlist.dto'
import { User } from '@prisma/client'

@Auth()
@Controller('wishlists')
export class WishlistController {
	constructor(private readonly wishlistService: WishlistService) {}

	@Get('')
	async getAll() {
		return await this.wishlistService.getAll()
	}

	@Get(':id')
	async getById(@Param('id') wishlistId: string) {
		return await this.wishlistService.getById(wishlistId)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	async create(@CurrentUser('id') userId: string, @Body() dto: WishlistDto) {
		return await this.wishlistService.create(userId, dto)
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	async update(
		@CurrentUser() user: User,
		@Param('id') wishlistId: string,
		@Body() dto: WishlistDto
	) {
		return await this.wishlistService.update(wishlistId, dto)
	}
}
