import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryDto } from './category.dto'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@UsePipes(new ValidationPipe())
	@Get()
	async getAll() {
		return await this.categoryService.getAll()
	}

	@Get('/:id')
	async getById(@Param('id') id: string) {
		return await this.categoryService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	async create(@Body() dto: CategoryDto) {
		return await this.categoryService.create(dto)
	}

	@Put('/:id')
	async update(@Param('id') id: string, @Body() dto: CategoryDto) {
		return await this.categoryService.update(id, dto)
	}
}
