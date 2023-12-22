import { Module } from '@nestjs/common'
import { WishlistService } from './wishlist.service'
import { WishlistController } from './wishlist.controller'

import { PrismaService } from 'src/prisma.service'
import { AbilityModule } from 'src/ability/ability.module'
import { ApartmentService } from 'src/apartment/apartment.service'

@Module({
	controllers: [WishlistController],
	providers: [WishlistService, PrismaService, ApartmentService],
	imports: [AbilityModule],
})
export class WishlistModule {}
