import { Body, Controller, Get, Post, Render, Session } from '@nestjs/common';
import { User } from 'src/user/entity/user.entity';
import { AddGoalDto } from './dtos/addGoal.dto';
import { GoalService } from './goal.service';

@Controller('goal')
export class GoalController {

    constructor(private readonly goalService: GoalService){}

    @Get('/add')
    @Render("goal/addGoal")
    getAddGoal(){};

    @Post('/add')
    async postAddGoal(@Body() body: AddGoalDto, @Session() session: Record<string, any>){
        const currentUser: User = session.user;
        return await this.goalService.postAddGoal(body, currentUser);
    }
}
