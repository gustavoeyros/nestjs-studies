import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cfcdqqw.mongodb.net/?retryWrites=true&w=majority`,
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
