import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import { AddGoalDto } from './dtos/addGoal.dto';
import { GoalEntity } from './entity/goal.entity';
import { UpdateGoalDto } from './dtos/update-goal.dto';


@Injectable()
export class GoalService {
    
    constructor(@InjectRepository(GoalEntity) private readonly goalRepository: Repository<GoalEntity>){}

    // READ ALL:
    async getAllGoals(): Promise<GoalEntity[]> {
        const goals = await this.goalRepository.find();
        // const goals = await this.goalRepository.find({order: {created_at: "DESC"}});
        return goals;
    }

    // CREATE
    async addGoal(newGoal: AddGoalDto) {
        const goal = this.goalRepository.create(newGoal);
        // goal.user = user;
        return await this.goalRepository.save(goal);
    }

    // UPDATE
    async updateGoal(id: number, goal: UpdateGoalDto): Promise<GoalEntity>{
        const newGoal = await this.goalRepository.preload({
            id,
            ...goal
        });
        if(!newGoal){
            throw new NotFoundException(`Le projet: ${id} n'existe pas.`);
        }
        return await this.goalRepository.save(newGoal);
    }

    // DELETE
    async removeGoal(id: number) {
        const goalToRemove = await this.goalRepository.findOneBy({id: id});
        if(!goalToRemove){
            throw new NotFoundException(`Le projet: ${id} n'existe pas.`);
        };
        return await this.goalRepository.remove(goalToRemove);
    }

    // DETAIL FOR ONE
    async getGoalById(id: number): Promise<GoalEntity> {
        const goal = await this.goalRepository.findOneBy({id: id});
        if(!goal){
            throw new NotFoundException(`Le projet: ${id} n'existe pas.`)
        }
        return goal;
    }

    
    
    
}
