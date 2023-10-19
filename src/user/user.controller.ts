import { Controller, Get, Render } from '@nestjs/common';
import { GoalService } from 'src/goal/goal.service';

@Controller('user')
export class UserController {
    constructor(private readonly goalService: GoalService){}

    @Get()
    @Render('user/profile')
    async getProfile(){
        const goals = await this.goalService.getAllGoals();
        return {goals};
    }

    
}
