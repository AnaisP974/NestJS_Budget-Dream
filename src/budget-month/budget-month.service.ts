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
            const newRemainingAmount = newMonthRemins;
            newBudgetMonth.plannedBudget1= newWeekRemains;
            newBudgetMonth.plannedBudget2= newWeekRemains;
            newBudgetMonth.plannedBudget3= newWeekRemains;
            newBudgetMonth.plannedBudget4= newWeekRemains;
            newBudgetMonth.plannedBudget5= newWeekRemains;
            newBudgetMonth.remainingAmount= newRemainingAmount;
            await this.budgetMonthRepository.save(newBudgetMonth)
        } else {
            const newWeekRemains = Math.trunc(newMonthRemins/5);
            newBudgetMonth.weekRemains = newWeekRemains;
            const newRemainingAmount = newMonthRemins
            // Créer le budget hebdomadaire :
            const quart = Math.trunc(newWeekRemains/4)
            
            newBudgetMonth.food1 = quart,
            newBudgetMonth.food2 = quart,
            newBudgetMonth.food3 = quart,
            newBudgetMonth.food4 = quart,
            newBudgetMonth.food5 = quart,
            newBudgetMonth.travel1 = quart,
            newBudgetMonth.travel2 = quart,
            newBudgetMonth.travel3 = quart,
            newBudgetMonth.travel4 = quart,
            newBudgetMonth.travel5 = quart,
            newBudgetMonth.leisure1 = quart,
            newBudgetMonth.leisure2 = quart,
            newBudgetMonth.leisure3 = quart,
            newBudgetMonth.leisure4 = quart,
            newBudgetMonth.leisure5 = quart,
            newBudgetMonth.emergency1 = quart,
            newBudgetMonth.emergency2 = quart,
            newBudgetMonth.emergency3 = quart,
            newBudgetMonth.emergency4 = quart,
            newBudgetMonth.emergency5 = quart,
            newBudgetMonth.plannedBudget1 = newWeekRemains,
            newBudgetMonth.plannedBudget2 = newWeekRemains,
            newBudgetMonth.plannedBudget3 = newWeekRemains,
            newBudgetMonth.plannedBudget4 = newWeekRemains,
            newBudgetMonth.plannedBudget5 = newWeekRemains,
            newBudgetMonth.remainingAmount= newRemainingAmount;   
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
        
        await this.budgetMonthRepository.save(newBudget);
        
        const budget = await this.budgetMonthRepository.findOneBy({id: id})
        // Calculer la somme dépensée par semaine 
        const { spentBudget3, spentBudget4, spentBudget5, spentBudget2, spentBudget1, monthRemains, food1, food2, food3, food4, food5, travel1, travel2, travel3, travel4, travel5, leisure1,leisure2, leisure3, leisure4, leisure5,emergency1, emergency2, emergency3, emergency4, emergency5} = budget;
        // S1
        const newSpentBudget1 = food1 + travel1 + leisure1 + emergency1;
        // S2
        const newSpentBudget2 = food2 + travel2 + leisure2 + emergency2;
        // S3
        const newSpentBudget3 = food3 + travel3 + leisure3 + emergency3;
        // S4
        const newSpentBudget4 = food4 + travel4 + leisure4 + emergency4;
        // S5
        const newSpentBudget5 = food5 + travel5 + leisure5 + emergency5;
        
        budget.spentBudget1 = newSpentBudget1,
        budget.spentBudget2 = newSpentBudget2
        budget.spentBudget3 = newSpentBudget3
        budget.spentBudget4 = newSpentBudget4
        budget.spentBudget5 = newSpentBudget5
        
        // et mettre à jour le résulat mensuel
        const newRemainingAmount = monthRemains - (newSpentBudget1 + newSpentBudget2 + newSpentBudget3 + newSpentBudget4 + newSpentBudget5 )
        budget.remainingAmount = newRemainingAmount;
        
        return await this.budgetMonthRepository.save(budget)
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
    // async getWeekBudget(budget){
    //     const weekBudget = await this.weekBudgetRepository.findOneBy({budgetMonth: budget});
    //     console.log(weekBudget) ;
    // }
}
