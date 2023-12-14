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

@Controller('apartments')
export class ApartmentController {
	constructor(private readonly apartmentService: ApartmentService) {}

	@Get(':id')
	async getById(@Param('id') id: string) {}

	@Get()
	async getAll() {}

	@UsePipes(new ValidationPipe())
	@Post()
	async create(@Body() dto: ApartmentDto) {}

	@Put(':id')
	async update(@Param('id') id: string, @Body() dto: ApartmentDto) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}
}
