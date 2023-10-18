import { InjectRepository } from "@nestjs/typeorm";
import { BudgetMonthEntity } from "./entity/budgetMonth.entity";
import { Repository } from "typeorm";
import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { BudgetMonthDto } from "./dtos/budget-month.dto";
import { UpdateBudgetMonthDto } from "./dtos/update-budget-month.dto";


@Injectable()
export class BudgetMonthService {
    constructor(
        @InjectRepository(BudgetMonthEntity) private budgetMonthRepository: Repository<BudgetMonthEntity>
    ){}
    
    // READ ALL:
    async getAllBudgetMonth(): Promise<BudgetMonthEntity[]> {
        return await this.budgetMonthRepository.find();
    }

    // CREATE
    async addBudgetMonth(newBudgetMonth: BudgetMonthDto): Promise<BudgetMonthEntity>{
        const {month, year} = newBudgetMonth;
        const exist = await this.budgetMonthRepository.findOneBy({month: month, year: year})
        if(exist){
            throw new NotAcceptableException(`Un budget a déjà été définit pour: ${month} ${year}. Merci de le selectionner et faire une modification`)
        }
        return await this.budgetMonthRepository.save(newBudgetMonth)
    }

    // UPDATE
    async updateBudgetMonth(id: number, budgetMonth: UpdateBudgetMonthDto): Promise<BudgetMonthEntity>{
        const newBudget = await this.budgetMonthRepository.preload({
            id,
            ...budgetMonth,
        });
        if(!newBudget){
            throw new NotFoundException(`Le budget: ${id} n'existe pas.`);
        }
        return await this.budgetMonthRepository.save(newBudget);
    }

    // DELETE definitively
    async removeBudgetMonth(id: number) {
        const budgetToRemove = await this.budgetMonthRepository.findOneBy({id: id});
        if(!budgetToRemove){
            throw new NotFoundException(`Le budget: ${id} n'existe pas.`);
        };
        return await this.budgetMonthRepository.remove(budgetToRemove);
    }

    // DETAIL FOR ONE
    async getBudgetMonthById(id: number): Promise<BudgetMonthEntity> {
        const budget = await this.budgetMonthRepository.findOneBy({id: id});
        if(!budget){
            throw new NotFoundException(`Le budget: ${id} n'existe pas.`)
        }
        return budget;
    }
}
