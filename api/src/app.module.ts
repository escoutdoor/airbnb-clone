import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { CategoryModule } from './category/category.module'
import { ApartmentModule } from './apartment/apartment.module'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'

@Module({
	imports: [
		AuthModule,
		CategoryModule,
		ApartmentModule,
		UserModule,
		ConfigModule.forRoot(),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
