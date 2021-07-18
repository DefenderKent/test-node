import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'kesha1995kent',
      database: 'test-app',
      models: [],
      autoLoadModels: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
