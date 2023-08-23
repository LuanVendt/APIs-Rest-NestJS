import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get('/:userName')
    public searchByUserName(@Param('userName') userName: string) {
        const userFinded = this.userService.searchByUsername(userName)
        
        return userFinded
    }

    @Post()
    public create(@Body() user: User): User {
        const userCreated = this.userService.create(user)

        return userCreated
    } 
}