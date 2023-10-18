import { IsString, IsEmail, IsNotEmpty, Length, IsNumber } from "class-validator";

export class AddGoalDto {

    @IsString()
    @IsNotEmpty()
    @Length(3, 150)
    readonly name: string;
    
    @IsString()
    @IsNotEmpty()
    @Length(2,30)
    readonly cost: number;

    @IsString()
    @IsNotEmpty()
    @Length(3, 150)
    readonly image: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 350)
    readonly description: string;

    @IsString()
    readonly status: string;
}