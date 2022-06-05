import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        // 配置项参考：https://github.com/mikenicholson/passport-jwt#configure-strategy
        super({
            // 从请求中获取 jwt
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            // 如果为 true，则不验证令牌的到期。
            ignoreExpiration: false,
            // 密钥
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}