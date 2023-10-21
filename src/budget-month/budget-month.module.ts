import { Module } from '@nestjs/common';
import { BudgetMonthController } from './budget-month.controller';
import { BudgetMonthService } from './budget-month.service';
import { BudgetMonthEntity } from './entity/budgetMonth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeekBudgetEntity } from 'src/week-budget/entity/week-budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetMonthEntity, WeekBudgetEntity])],
  controllers: [BudgetMonthController],
  providers: [BudgetMonthService]
})
export class BudgetMonthModule {}
