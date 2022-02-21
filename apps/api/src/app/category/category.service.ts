import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category, CategoryDocument } from './schemas/category.schema';
import { Model } from 'mongoose';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryModel } from '@clone/models';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) {}
  private category = [];
  async getAll(): Promise<CategoryModel[]> {
    return this.categoryModel.find().exec();
  }

  async getById(id: string): Promise<Category> {
    return this.categoryModel.findById(id);
  }

  async create(categoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = new this.categoryModel(categoryDto);
    return newCategory.save();
  }
  async remove(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndRemove(id);
  }
  async update(id: string, categoryDto: UpdateCategoryDto): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, categoryDto, { new: true });
  }
}
