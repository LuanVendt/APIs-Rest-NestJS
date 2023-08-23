import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class User {
    id: number;

    @IsNotEmpty()
    @IsString({ message: 'Nome não pode conter números!' })
    userName: string;

    @IsNotEmpty()
    @IsEmail({}, {
        message: 'Insira um e-mail válido!'
    })
    email: string;

    @IsNotEmpty({ message: 'Senha é obrigatório!' })
    password: string;

    @IsNotEmpty({
        message: 'Nome completo é obrigatório!'
    })
    fullName: string;
    entryDate: Date;
}