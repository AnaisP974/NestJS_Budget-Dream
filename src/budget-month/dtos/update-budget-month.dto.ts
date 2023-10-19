import { Type } from 'class-transformer';
import { IsInt, Min, IsEnum, Length, IsOptional, IsNumber } from 'class-validator';
import { BudgetMonthEnum } from 'src/enum/budget-month.enum';

export class UpdateBudgetMonthDto {
    @IsOptional()
    @IsEnum(BudgetMonthEnum)
    @Min(new Date().getFullYear(), { message: 'L\'année ne peut pas être inférieure à l\'année actuelle.' })
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
}