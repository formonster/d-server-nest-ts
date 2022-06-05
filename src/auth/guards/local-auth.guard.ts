import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// 将 AuthGuard('local') 单独抽离的目的
// 1. 消除魔法字符串 'local'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}