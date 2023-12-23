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
import { CategoryService } from './category.service'
import { CategoryDto } from './category.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CheckAbilities } from 'src/ability/ability.decorator'
import { Action } from 'src/ability/ability.factory'

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

	@Auth()
	@CheckAbilities({ action: Action.Create, subject: 'Category' })
	@UsePipes(new ValidationPipe())
	@Post()
	async create(@Body() dto: CategoryDto) {
		return await this.categoryService.create(dto)
	}

	@Auth()
	@CheckAbilities({ action: Action.Update, subject: 'Category' })
	@Put('/:id')
	async update(@Param('id') id: string, @Body() dto: CategoryDto) {
		return await this.categoryService.update(id, dto)
	}

	@Auth()
	@CheckAbilities({ action: Action.Delete, subject: 'Category' })
	@Delete('/:id')
	async delete(@Param('id') id: string) {
		return await this.categoryService.delete(id)
	}
}
