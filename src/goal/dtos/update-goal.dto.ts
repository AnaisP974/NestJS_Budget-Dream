import { Type } from "class-transformer";
import { IsString, Length, IsNumber, IsOptional, IsEnum, IsDefined } from "class-validator";
import { GoalStatusEnum } from "src/enum/goal-status.enum";

export class UpdateGoalDto {

    @IsString()
    @IsOptional()
    @Length(3, 150)
    readonly name: string;
    
    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    readonly cost: number;

    @IsString()
    @IsOptional()
    @Length(3, 150)
    readonly image: string;

    @IsString()
    @IsOptional()
    @Length(3, 350)
    readonly description: string;

    @IsEnum(GoalStatusEnum)
    @IsOptional()
    @IsString()
    readonly status: string;
}