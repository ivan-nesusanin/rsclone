import * as mongoose from 'mongoose';

export class DBHelper {
  static init(): void {
    mongoose
      .connect(
        'mongodb+srv://rsstudent:FJLjwzI0gaKzGEok@cluster0.w9p60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
      )
      .then(() => console.log('MongoDB connect'))
      .catch((e: Error) => console.log(`MongoDB connection failed.\n\n${e}`));
  }
}
