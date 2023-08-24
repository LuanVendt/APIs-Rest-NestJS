import { Injectable } from "@nestjs/common"
import { User } from "./user.entity"

@Injectable()
export class UserService {
    private users: Array<User> = [{
        id: 1,
        userName: 'luan',
        email: 'luan@mail.com',
        password: '123456',
        fullName: 'Luan Henrique Vendt',
        joinDate: new Date()
    }]
    
    public create(user: User): User{
        this.users.push(user)
        
        return user
    }

    public searchByUsername(userName: string): User {
        return this.users.find(user => user.userName === userName)
    }
}