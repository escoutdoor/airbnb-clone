import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CategoryModule } from './category/category.module'
import { ApartmentModule } from './apartment/apartment.module'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { WishlistModule } from './wishlist/wishlist.module'
import { AbilityModule } from './ability/ability.module'
import { ReviewModule } from './review/review.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
	imports: [
		CategoryModule,
		ApartmentModule,
		UserModule,
		AuthModule,
		WishlistModule,
		AbilityModule,
		ReviewModule,
		ReservationModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
