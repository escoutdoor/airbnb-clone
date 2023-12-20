import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ApartmentService } from './apartment.service'
import { ApartmentDto } from './apartment.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CheckAbilities } from 'src/ability/abilities.decorator'
import { Action } from 'src/ability/ability.factory'
import { CurrentUser } from 'src/auth/decorators/user.decorator'

@Controller('apartments')
export class ApartmentController {
	constructor(private readonly apartmentService: ApartmentService) {}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return await this.apartmentService.getById(id)
	}

	@Get()
	async getAll() {
		return await this.apartmentService.getAll()
	}

	@Auth()
	@CheckAbilities({ action: Action.Create, subject: 'Apartment' })
	@UsePipes(new ValidationPipe())
	@Post()
	async create(@CurrentUser('id') userId: string, @Body() dto: ApartmentDto) {
		return await this.apartmentService.create(userId, dto)
	}

	@Auth()
	@CheckAbilities({ action: Action.Update, subject: 'Apartment' })
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: ApartmentDto) {
		return await this.apartmentService.update(id, dto)
	}

	@Auth()
	@CheckAbilities({ action: Action.Delete, subject: 'Apartment' })
	@Delete(':id')
	async delete(@Param('id') id: string) {
		return await this.apartmentService.delete(id)
	}
}
