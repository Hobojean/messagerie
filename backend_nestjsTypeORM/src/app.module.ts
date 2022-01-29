import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './user/user.entity'
import {UserModule} from "./user/user.module";
import {Connection} from "typeorm";
import { MessageModule } from './message/message.module';
import {Message} from "./message/message.entity";


@Module({
  imports: [
      UserModule,
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'chatroom',
          entities: [User, Message],
          synchronize: true,
          autoLoadEntities: true
      }),
      MessageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    constructor(private connection: Connection) {}

}
