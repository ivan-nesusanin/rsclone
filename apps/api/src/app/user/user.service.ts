import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from '@clone/models';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  private user = [];
  async getAll(): Promise<UserModel[]> {
    return this.userModel.find().exec();
  }

  async getById(id: string): Promise<User> {
    return this.userModel.findById(id);
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }
  async remove(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }
  async update(id: string, userDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true });
  }
}
