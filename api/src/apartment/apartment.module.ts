import { Module } from '@nestjs/common'
import { ApartmentService } from './apartment.service'
import { ApartmentController } from './apartment.controller'
import { PrismaService } from 'src/prisma.service'
import { AbilityModule } from 'src/ability/ability.module'

@Module({
	controllers: [ApartmentController],
	providers: [ApartmentService, PrismaService],
	imports: [AbilityModule],
})
export class ApartmentModule {}
