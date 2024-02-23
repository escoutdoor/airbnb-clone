import { Module } from '@nestjs/common'
import { ReservationService } from './reservation.service'
import { ReservationController } from './reservation.controller'
import { PrismaService } from 'src/prisma.service'
import { ApartmentService } from 'src/apartment/apartment.service'
import { AbilityModule } from 'src/ability/ability.module'

@Module({
	controllers: [ReservationController],
	providers: [ReservationService, PrismaService, ApartmentService],
	imports: [AbilityModule],
})
export class ReservationModule {}
