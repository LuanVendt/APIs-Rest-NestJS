import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get('/:userName')
    public searchByUserName(@Param('userName') userName: string) {
        const userFinded = this.userService.searchByUsername(userName)
        
        if (!userFinded){
            throw new NotFoundException();
        }
        return userFinded
    }

    @Post()
    public create(@Body() user: User): NestResponse { 

        const createdUser = this.userService.create(user)
        return new NestResponseBuilder()
                .comStatus(HttpStatus.CREATED)
                .comHeaders({
                    'Location': `/users/${createdUser.userName}`
                })
                .comBody(createdUser)
                .build()
    } 
}