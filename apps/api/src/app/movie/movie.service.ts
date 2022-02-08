import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie, MovieDocument } from './schemas/movie.schema';
import { Model } from 'mongoose';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieId } from '@clone/models'

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>
  ) {}
  private movie = [];
  async getAll(): Promise<MovieId[]> {
    return this.movieModel.find().exec();
  }

  async getById(id: string): Promise<Movie> {
    return this.movieModel.findById(id);
  }

  async create(movieDto: CreateMovieDto): Promise<Movie> {
    const newMovie = new this.movieModel(movieDto);
    return newMovie.save();
  }
  async remove(id: string): Promise<Movie> {
    return this.movieModel.findByIdAndRemove(id);
  }
  async update(id: string, movieDto: UpdateMovieDto): Promise<Movie> {
    return this.movieModel.findByIdAndUpdate(id, movieDto, { new: true });
  }
}
