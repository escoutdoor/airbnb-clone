import { Module } from '@nestjs/common'
import { WishlistService } from './wishlist.service'
import { WishlistController } from './wishlist.controller'
import { AbilityModule } from 'src/ability/ability.module'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [WishlistController],
	providers: [WishlistService, PrismaService],
	imports: [AbilityModule],
})
export class WishlistModule {}
