import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryService } from './category.service';
import { Category } from './schemas/category.schema';
import { CategoryModel } from '@clone/models';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getAll(): Promise<CategoryModel[]> {
    return this.categoryService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string): Promise<Category> {
    return this.categoryService.remove(id);
  }
  @Put(':id')
  update(
    @Body() updateCategoryDto: UpdateCategoryDto,
    @Param('id') id: string
  ): Promise<Category> {
    return this.categoryService.update(id, updateCategoryDto);
  }
}
