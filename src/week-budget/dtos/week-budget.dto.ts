import { Type } from 'class-transformer';
import { IsInt, Min, IsEnum, Length, IsOptional, IsNumber, IsNotEmpty, IsBooleanString } from 'class-validator';

export class WeekBudgetDto {
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    food1: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    food2: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    food3: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    food4: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    food5: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    travel1: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    travel2: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    travel3: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    travel4: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    travel5: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    leisure1: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    leisure2: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    leisure3: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    leisure4: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    leisure5: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    emergency1: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    emergency2: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    emergency3: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    emergency4: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    emergency5: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    plannedBudget1: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    plannedBudget2: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    plannedBudget3: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    plannedBudget4: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    plannedBudget5: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    spentBudget1: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    spentBudget2: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    spentBudget3: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    spentBudget4: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    spentBudget5: number;

    @IsBooleanString()
    @IsOptional()
    @Type(() => Boolean)
    isWinning: boolean;


    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    remainingAmount: number;

}