import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategys/local.strategy';
import { JwtStrategy } from './strategys/jwt.strategy';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    // 配置项参考：https://github.com/auth0/node-jsonwebtoken#usage
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy
  ],
  exports: [AuthService],
})
export class AuthModule { }
