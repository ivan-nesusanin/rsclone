import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    MovieModule,
    MongooseModule.forRoot(
      `mongodb+srv://rsstudent:FJLjwzI0gaKzGEok@cluster0.w9p60.mongodb.net/movies?retryWrites=true&w=majority`
    ),
  ],
})
export class AppModule {}
