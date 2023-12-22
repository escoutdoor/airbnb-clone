import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CategoryModule } from './category/category.module'
import { ApartmentModule } from './apartment/apartment.module'
import { UserModule } from './user/user.module'
import { AuthModule } from './auth/auth.module'
import { WishlistModule } from './wishlist/wishlist.module'
import { CaslModule } from './casl/casl.module';
import { AbilityModule } from './ability/ability.module';

@Module({
	imports: [
		CategoryModule,
		ApartmentModule,
		UserModule,
		AuthModule,
		WishlistModule,
		CaslModule,
		AbilityModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
