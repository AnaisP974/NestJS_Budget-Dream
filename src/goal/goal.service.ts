import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { AddGoalDto } from './dtos/addGoal.dto';
import { Goal } from './entity/goal.entity';

@Injectable()
export class GoalService {
    

    constructor(@InjectRepository(Goal) private readonly goalRepository: Repository<Goal>){}

    async postAddGoal(body: AddGoalDto, user: User) {
        const goal = this.goalRepository.create(body);
        goal.user = user;
        await this.goalRepository.save(goal);
        return "Created Article";
    }
    
    async getAllGoals() {
        const goals = await this.goalRepository.find();
        // const goals = await this.goalRepository.find({order: {created_at: "DESC"}});
        return goals;
    }
}
