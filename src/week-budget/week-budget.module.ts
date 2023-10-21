import { Module } from '@nestjs/common';
import { WeekBudgetController } from './week-budget.controller';
import { WeekBudgetService } from './week-budget.service';

@Module({
  controllers: [WeekBudgetController],
  providers: [WeekBudgetService]
})
export class WeekBudgetModule {}
