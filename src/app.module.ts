import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { BaseModule } from './base/base.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { User } from './users/user.entity';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const database = configService.get('database')
        console.log(database);

        return {
          type: 'mysql',
          entities: [User],
          autoLoadEntities: true,
          // 自动同步模型
          synchronize: true,
          ...database
        }
      },
    }),
    BaseModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // 注册为全局守卫
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule { }
