import { Type } from "class-transformer";
import { IsString, IsEmail, IsNotEmpty, Length, IsNumber, IsOptional, IsEnum, IsDefined } from "class-validator";
import { GoalStatusEnum } from "src/enum/goal-status.enum";

export class AddGoalDto {

    @IsString()
    @IsNotEmpty()
    @Length(3, 150)
    readonly name: string;
    
    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    readonly cost: number;

    @IsString()
    @IsOptional()
    @Length(3, 150)
    readonly image: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 350)
    readonly description: string;

    @IsEnum(GoalStatusEnum)
    @IsOptional()
    @IsString()
    readonly status: string;
}