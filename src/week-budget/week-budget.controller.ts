import { Body, Controller, Get, Post, Render, ValidationPipe } from '@nestjs/common';
import { WeekBudgetService } from './week-budget.service';

@Controller('week-budget')
export class WeekBudgetController {

    constructor(private readonly weekBudgetService: WeekBudgetService){}

    // CREATE
    @Get('/add')
    @Render('week/add-week-budget.ejs')
    createFormWeekBudget(){}

//     @Post('/add')
//     async addWeekBudget(@Body(ValidationPipe) newWeekBudget: AddGoalDto): Promise<GoalEntity> {
//         return await this.goalService.addGoal(newGoal);
//     }
}
