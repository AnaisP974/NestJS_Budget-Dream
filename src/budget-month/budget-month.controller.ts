import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Redirect, Render, Session, ValidationPipe } from '@nestjs/common';
import { BudgetMonthService } from './budget-month.service';
import { BudgetMonthDto } from './dtos/budget-month.dto';
import { BudgetMonthEntity } from './entity/budgetMonth.entity';
import { UpdateBudgetMonthDto } from './dtos/update-budget-month.dto';
import { User } from 'src/user/entity/user.entity';

@Controller('budget-month')
export class BudgetMonthController {
    constructor(private budgetMonthService: BudgetMonthService){}

    // READ ALL
    @Get()
    @Render('budget/all-budgets')
    async getAllBudgetMonth(){
        const budgets = await this.budgetMonthService.getAllBudgetMonth();
        return {budgets}
    }
 
    // CREATE 
    @Get('/add')
    @Render("budget/add-budget")
    newBudget(){}

    @Post('/add')
    @Redirect('/budget-month')
    async addBudgetMonth(@Body(ValidationPipe) newBudgetMonth: BudgetMonthDto, @Session() session: Record<string, any>) {
        const message = await this.budgetMonthService.addBudgetMonth(newBudgetMonth);
        session.message = message;
        session.register = true;
    }
    
    // UPDATE one
    @Get('update/:id')
    @Render("budget/update-budget")
    async updateBudgetById(@Param('id', ParseIntPipe) id: number){
        const budget = await this.budgetMonthService.getBudgetMonthById(id);
        return  {budget}; 
    }

    @Post('update/:id')
    @Redirect('/budget-month')
    async updateBudgetMonth(@Body() newBudget: UpdateBudgetMonthDto, @Param('id', ParseIntPipe) id: number): Promise<BudgetMonthEntity>{
        return await this.budgetMonthService.updateBudgetMonth(id, newBudget);
    }

    // DELETE definitively
    @Get('delete/:id')
    @Delete('delete/:id')
    @Redirect('/budget-month')
    async removeBudgetMonth(@Param('id', ParseIntPipe) id: number, @Session() session: Record<string, any>){
        const message = await this.budgetMonthService.removeBudgetMonth(id);
        session.message = message;
        session.register = true;
    }

    // DETAIL FOR ONE*
    @Get('details/:id')
    @Render("budget/read-budget")
    async getBudgetMonthById(@Param('id', ParseIntPipe) id: number) {
        const budget = await this.budgetMonthService.getBudgetMonthById(id);
        return  {budget};
    }

    // Créer une route pour filtrer les budgets selon s'il s'agit d'un gain/perte
    // 
    //                               [...]
    // 
    // __________________________________________________________________________

    
}
