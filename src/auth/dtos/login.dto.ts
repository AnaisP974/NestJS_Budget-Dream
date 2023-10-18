import { IsString, IsEmail, IsNotEmpty, Length } from "class-validator";

export class LoginDto {

    @IsEmail()
    @IsNotEmpty()
    @Length(5, 150)
    readonly email: string;
    
    @IsString()
    @IsNotEmpty()
    @Length(8,30)
    readonly password: string;
}