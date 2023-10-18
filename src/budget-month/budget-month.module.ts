import { Module } from '@nestjs/common';
import { BudgetMonthController } from './budget-month.controller';
import { BudgetMonthService } from './budget-month.service';
import { BudgetMonthEntity } from './entity/budgetMonth.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetMonthEntity])],
  controllers: [BudgetMonthController],
  providers: [BudgetMonthService]
})
export class BudgetMonthModule {}
