import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ApartmentModule } from './apartment/apartment.module';

@Module({
  imports: [AuthModule, CategoryModule, ApartmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
