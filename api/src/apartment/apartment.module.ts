import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { ApartmentController } from './apartment.controller';

@Module({
  controllers: [ApartmentController],
  providers: [ApartmentService],
})
export class ApartmentModule {}
