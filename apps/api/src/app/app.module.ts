import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MovieModule } from './movie/movie.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MovieModule,
    UserModule,
    CategoryModule,
    AuthModule,
    MongooseModule.forRoot(
      `mongodb+srv://rsstudent:FJLjwzI0gaKzGEok@cluster0.w9p60.mongodb.net/movies?retryWrites=true&w=majority`
    ),
  ],
  controllers: [AppController],
})
export class AppModule {}
