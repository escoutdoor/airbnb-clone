import { Module } from '@nestjs/common'
import { ReviewService } from './review.service'
import { ReviewController } from './review.controller'
import { PrismaService } from 'src/prisma.service'
import { AbilityModule } from 'src/ability/ability.module'
import { UserService } from 'src/user/user.service'
import { ApartmentService } from 'src/apartment/apartment.service'

@Module({
	controllers: [ReviewController],
	providers: [ReviewService, UserService, ApartmentService, PrismaService],
	imports: [AbilityModule],
})
export class ReviewModule {}
