import { Module } from '@nestjs/common'
import { ApartmentService } from './apartment.service'
import { ApartmentController } from './apartment.controller'
import { PrismaService } from 'src/prisma.service'

@Module({
	controllers: [ApartmentController],
	providers: [ApartmentService, PrismaService],
})
export class ApartmentModule {}
