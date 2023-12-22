import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { PrismaService } from 'src/prisma.service'
import { AbilityModule } from 'src/ability/ability.module'

@Module({
	controllers: [UserController],
	providers: [UserService, PrismaService],
	imports: [AbilityModule],
})
export class UserModule {}
