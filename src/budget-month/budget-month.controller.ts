import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { BudgetMonthService } from './budget-month.service';
import { BudgetMonthDto } from './dtos/budget-month.dto';
import { BudgetMonthEntity } from './entity/budgetMonth.entity';
import { UpdateBudgetMonthDto } from './dtos/update-budget-month.dto';

@Controller('budget-month')
export class BudgetMonthController {
    constructor(private readonly budgetMonthService: BudgetMonthService){}

    // READ ALL
    @Get()
    async getAllBudgetMonth(): Promise<BudgetMonthEntity[]>{
        return await this.budgetMonthService.getAllBudgetMonth();
    }

    // CREATE 
    @Post()
    async addBudgetMonth(@Body(ValidationPipe) newBudgetMonth: BudgetMonthDto): Promise<BudgetMonthEntity> {
        return await this.budgetMonthService.addBudgetMonth(newBudgetMonth);
    }
    
    // UPDATE one
    @Put('/:id')
    async updateBudgetMonth(@Body() newBudget: UpdateBudgetMonthDto, @Param('id', ParseIntPipe) id: number): Promise<BudgetMonthEntity>{
        return await this.budgetMonthService.updateBudgetMonth(id, newBudget);
    }

    // DELETE definitively
    @Delete('/:id')
    async removeBudgetMonth(@Param('id', ParseIntPipe) id: number){
        return await this.budgetMonthService.removeBudgetMonth(id);
    }

    // DETAIL FOR ONE
    @Get('/:id')
    async getBudgetMonthById(@Param('id', ParseIntPipe) id: number): Promise<BudgetMonthEntity>{
        return await this.budgetMonthService.getBudgetMonthById(id);
    }

    // Créer une route pour filtrer les budgets selon s'il s'agit d'un gain/perte
    // 
    //                               [...]
    // 
    // __________________________________________________________________________

    
}
