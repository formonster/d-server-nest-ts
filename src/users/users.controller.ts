import { Controller, Get } from '@nestjs/common';
import { Public } from 'src/auth/constants';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
    ) { }

    @Public()
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
