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
import { CheckAbilities } from 'src/ability/abilities.decorator'
import { Action } from 'src/ability/ability.factory'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { WishlistDto } from './wishlist.dto'

@Auth()
@Controller('wishlists')
export class WishlistController {
	constructor(private readonly wishlistService: WishlistService) {}

	@CheckAbilities({ action: Action.Read, subject: 'Wishlist' })
	@Get('')
	async getAll() {
		return await this.wishlistService.getAll()
	}

	@Get(':id')
	@CheckAbilities({ action: Action.Read, subject: 'Wishlist' })
	async getById(@Param('id') wishlistId: string) {
		return await this.wishlistService.getById(wishlistId)
	}

	@CheckAbilities({ action: Action.Create, subject: 'Wishlist' })
	@UsePipes(new ValidationPipe())
	@Post()
	async create(@CurrentUser('id') userId: string, @Body() dto: WishlistDto) {
		return await this.wishlistService.create(userId, dto)
	}

	@CheckAbilities({ action: Action.Update, subject: 'Wishlist' })
	@UsePipes(new ValidationPipe())
	@Put(':id')
	async update(@Param('id') wishlistId: string, @Body() dto: WishlistDto) {
		return await this.wishlistService.update(wishlistId, dto)
	}
}
