import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ApartmentService } from './apartment.service'
import { ApartmentDto } from './dto/apartment.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'
import { ApartmentFilterDto } from './dto/apartment-filter.dto'

@Controller('apartments')
export class ApartmentController {
	constructor(private readonly apartmentService: ApartmentService) {}

	@Get(':id')
	async getById(@Param('id') id: string) {
		return await this.apartmentService.getById(id)
	}

	@UsePipes(new ValidationPipe({ transform: true }))
	@Get()
	async getAll(@Query() dto: ApartmentFilterDto) {
		return await this.apartmentService.getAll(dto)
	}

	@Auth()
	@UsePipes(new ValidationPipe())
	@Post()
	async create(@CurrentUser('id') userId: string, @Body() dto: ApartmentDto) {
		return await this.apartmentService.create(userId, dto)
	}

	@Auth()
	@Put(':id')
	async update(
		@Param('id') id: string,
		@Body() dto: ApartmentDto,
		@CurrentUser('id') userId: string,
	) {
		return await this.apartmentService.update(id, userId, dto)
	}

	@Auth()
	@Delete(':id')
	async delete(@Param('id') id: string, @CurrentUser('id') userId: string) {
		return await this.apartmentService.delete(id, userId)
	}
}
