import { Module } from '@nestjs/common'
import { ReviewService } from './review.service'
import { ReviewController } from './review.controller'
import { PrismaService } from 'src/prisma.service'
import { AbilityModule } from 'src/ability/ability.module'

@Module({
	controllers: [ReviewController],
	providers: [ReviewService, PrismaService],
	imports: [AbilityModule],
})
export class ReviewModule {}
