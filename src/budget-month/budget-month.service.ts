import { InjectRepository } from "@nestjs/typeorm";
import { BudgetMonthEntity } from "./entity/budgetMonth.entity";
import { Repository } from "typeorm";
import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { BudgetMonthDto } from "./dtos/budget-month.dto";
import { UpdateBudgetMonthDto } from "./dtos/update-budget-month.dto";
import { User } from "src/user/entity/user.entity";


@Injectable()
export class BudgetMonthService {
    constructor(
        @InjectRepository(BudgetMonthEntity) private budgetMonthRepository: Repository<BudgetMonthEntity>
    ){}
    
    // READ ALL:
    async getAllBudgetMonth(): Promise<BudgetMonthEntity[]> {
        return await this.budgetMonthRepository.find({order: {createdAt: "DESC"}});
    }

    // CREATE
    async addBudgetMonth(newBudgetMonth: BudgetMonthDto) {
        // Avant de créer un nv budget mensuel, vérifier s'il n'y en a pas un de déjà existant
        const {month, year} = newBudgetMonth;
        const exist = await this.budgetMonthRepository.findOneBy({month: month, year: year})
        if(exist){
            return `Un budget a déjà été définit pour: ${month} ${year}. Merci de le selectionner et faire une modification`;
        }
        
        // Calculer le budget mensuel 
        const {salary, socialAssistance, helpThird, otherCommingIn} = newBudgetMonth;
        const newMonthBudget = salary + socialAssistance + helpThird + otherCommingIn;
        newBudgetMonth.monthBudget = newMonthBudget;

        // Calculer les charges mensuels
        const {rent, energyInvoices, insuranceInvoices, telephonesInvoices, otherDebits, otherInvoices} = newBudgetMonth;
        const newMonthExpenses = rent + energyInvoices + insuranceInvoices + telephonesInvoices + otherDebits + otherInvoices;
        newBudgetMonth.monthExpenses = newMonthExpenses;

        // Calculer les prévisions mensuels et hebdomadaires
        const newMonthRemins = newMonthBudget - newMonthExpenses
        newBudgetMonth.monthRemains = newMonthRemins;

        if(newMonthRemins <= 0){
            const newWeekRemains = 0;
            newBudgetMonth.weekRemains = newWeekRemains;
            await this.budgetMonthRepository.save(newBudgetMonth)
        } else {
            const newWeekRemains = Math.trunc(newMonthRemins/5);
            newBudgetMonth.weekRemains = newWeekRemains;
            await this.budgetMonthRepository.save(newBudgetMonth)
        }
            return `Le budget: ${newBudgetMonth.month} ${newBudgetMonth.year} a bien été créé.`
        
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
        await this.budgetMonthRepository.remove(budgetToRemove);
        return `Le budget: ${budgetToRemove.month} ${budgetToRemove.year} a bien été supprimé.`;
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
