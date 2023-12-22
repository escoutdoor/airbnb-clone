import { Module } from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryController } from './category.controller'
import { PrismaService } from 'src/prisma.service'
import { AbilityModule } from 'src/ability/ability.module'

@Module({
	controllers: [CategoryController],
	providers: [CategoryService, PrismaService],
	imports: [AbilityModule],
})
export class CategoryModule {}
