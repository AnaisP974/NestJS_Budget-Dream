import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Render, Session, ValidationPipe } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { AddGoalDto } from './dtos/addGoal.dto';
import { GoalService } from './goal.service';
import { GoalEntity } from './entity/goal.entity';
import { UpdateGoalDto } from './dtos/update-goal.dto';

@Controller('goal')
export class GoalController {

    constructor(private readonly goalService: GoalService){}

    // READ ALL:
    @Get()
    @Render('goal/goals')
    async getAllGoals() {
        const goals = await this.goalService.getAllGoals();
        return {goals};
    }

    // CREATE
    @Post()
    async addGoal(@Body(ValidationPipe) newGoal: AddGoalDto): Promise<GoalEntity> {
        return await this.goalService.addGoal(newGoal);
    }

    // UPDATE
    @Put('/:id')
    async updateGoal(@Body() newGoal: UpdateGoalDto, @Param('id', ParseIntPipe) id: number): Promise<GoalEntity>{
        return await this.goalService.updateGoal(id, newGoal);
    }

    // DELETE
    @Delete('/:id')
    async removeGoal(@Param('id', ParseIntPipe) id: number){
        return await this.goalService.removeGoal(id);
    }

    // DETAIL FOR ONE
    @Get('/:id')
    async getGoalById(@Param('id', ParseIntPipe) id: number): Promise<GoalEntity>{
        return await this.goalService.getGoalById(id);
    }


}
