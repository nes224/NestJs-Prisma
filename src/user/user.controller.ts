import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Controller('user')
export class UserController {

    @UseGuards(JwtGuard)
    @Get('me')
    getMet(@GetUser() user: User) {
        return user;
    }

}
