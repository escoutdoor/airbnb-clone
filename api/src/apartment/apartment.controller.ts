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
	@UsePipes(new ValidationPipe())
	@Post()
	async create(@Body() dto: ApartmentDto) {
		return await this.apartmentService.create(dto)
	}

	@Auth()
	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: ApartmentDto) {
		return await this.apartmentService.update(id, dto)
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		return await this.apartmentService.delete(id)
	}
}
