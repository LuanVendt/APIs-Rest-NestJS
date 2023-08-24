import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator"
import { UserService } from "./user.service"
import { Injectable } from "@nestjs/common"

@Injectable()
@ValidatorConstraint()
export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {

    constructor(private userService: UserService) {}

    validate(userName: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.userService.searchByUsername(userName)
    }
}

export function IsUserAlreadyExist(validatorOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string){
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validatorOptions,
            constraints: [],
            validator: IsUserAlreadyExistConstraint ,
        })
    }
}