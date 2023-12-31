import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUserAlreadyExist } from "./is-user-already-exist.validator";
import { Exclude, Expose } from "class-transformer";

export class User {
    id: number;

    @IsNotEmpty()
    @IsString({ 
        message: 'Nome não pode conter números!' 
    })
    

    @IsUserAlreadyExist({
        message: 'Nome de usuário já cadastrado!'
    })
    userName: string;


    @IsNotEmpty()
    @IsEmail({}, {
        message: 'Insira um e-mail válido!'
    })
    email: string;


    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({ 
        message: 'Senha é obrigatório!' 
    })
    password: string;


    @IsNotEmpty({
        message: 'Nome completo é obrigatório!'
    })


    fullName: string;
    joinDate: Date;
}