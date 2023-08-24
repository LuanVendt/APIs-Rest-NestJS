import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { IsUserAlreadyExistConstraint } from "./is-user-already-exist.validator";


@Module({
    controllers: [UserController],
    providers: [
        UserService,
        IsUserAlreadyExistConstraint
    ]
})
export class UserModule {

}