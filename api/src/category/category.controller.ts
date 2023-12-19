import {
	Body,
	Controller,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { CategoryDto } from './category.dto'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { AbilitiesGuard } from 'src/ability/abilities.guard'
import { AuthGuard } from '@nestjs/passport'
import { CheckAbilities } from 'src/ability/abilities.decorator'
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
	@UseGuards(AuthGuard('jwt'), AbilitiesGuard)
	@CheckAbilities({ action: Action.Create, subject: 'Category' })
	@UsePipes(new ValidationPipe())
	@Post()
	async create(@Body() dto: CategoryDto) {
		return await this.categoryService.create(dto)
	}

	@Auth()
	@UseGuards(AuthGuard('jwt'), AbilitiesGuard)
	@CheckAbilities({ action: Action.Update, subject: 'Category' })
	@Put('/:id')
	async update(@Param('id') id: string, @Body() dto: CategoryDto) {
		return await this.categoryService.update(id, dto)
	}
}
