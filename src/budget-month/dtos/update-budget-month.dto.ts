import { Type } from 'class-transformer';
import { IsInt, Min, IsEnum, IsOptional, IsBooleanString, IsNumberString, IsNumber } from 'class-validator';
import { BudgetMonthEnum } from 'src/enum/budget-month.enum';

export class UpdateBudgetMonthDto {
    @IsOptional()
    @IsEnum(BudgetMonthEnum)
    month: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt({ message: 'L\'année doit être un nombre entier.' })
    year: number;

    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    salary: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    socialAssistance: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    helpThird: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    otherCommingIn: number;
      
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    rent: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    energyInvoices: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    insuranceInvoices: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    telephonesInvoices: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    otherDebits: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    otherInvoices: number;
      
    // valeurs à calculer
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    monthBudget: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    monthExpenses: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    monthRemains: number;
      
    @IsNumber()
    @IsOptional()
    @Type(() => Number)
    weekRemains: number;

    // ------------------------

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