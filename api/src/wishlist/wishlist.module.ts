import { Module } from '@nestjs/common'
import { WishlistService } from './wishlist.service'
import { WishlistController } from './wishlist.controller'

import { PrismaService } from 'src/prisma.service'
import { UserService } from 'src/user/user.service'
import { AbilityModule } from 'src/ability/ability.module'

@Module({
	controllers: [WishlistController],
	providers: [WishlistService, PrismaService, UserService],
	imports: [AbilityModule],
})
export class WishlistModule {}
