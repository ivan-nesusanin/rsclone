import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { MovieModule } from './movie/movie.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MovieModule,
    UserModule,
    MongooseModule.forRoot(
      `mongodb+srv://rsstudent:FJLjwzI0gaKzGEok@cluster0.w9p60.mongodb.net/rsclone?retryWrites=true&w=majority`
    ),
  ],
})
export class AppModule {}
