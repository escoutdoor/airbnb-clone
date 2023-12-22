import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { WishlistService } from './wishlist.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { WishlistDto, WishlistToggleApartmentDto } from './wishlist.dto'
import { CheckAbilities } from 'src/ability/ability.decorator'
import { Action } from 'src/ability/ability.factory'

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
	async getById(
		@CurrentUser('id') userId: string,
		@Param('id') wishlistId: string
	) {
		return await this.wishlistService.getById(wishlistId, userId)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	async create(@CurrentUser('id') userId: string, @Body() dto: WishlistDto) {
		return await this.wishlistService.create(userId, dto)
	}

	@Delete(':id')
	async delete(
		@CurrentUser('id') userId: string,
		@Param('id') wishlistId: string
	) {
		return await this.wishlistService.delete(wishlistId, userId)
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	async update(
		@CurrentUser('id') userId: string,
		@Param('id') wishlistId: string,
		@Body() dto: WishlistDto
	) {
		return await this.wishlistService.update(wishlistId, userId, dto)
	}

	@UsePipes(new ValidationPipe())
	@Patch(':id')
	async toggleApartment(
		@CurrentUser('id') userId: string,
		@Param('id') wishlistId: string,
		@Body() dto: WishlistToggleApartmentDto
	) {
		return await this.wishlistService.toggleApartment(
			wishlistId,
			userId,
			dto.apartmentId
		)
	}
}
