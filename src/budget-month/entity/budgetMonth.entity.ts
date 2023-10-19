import { TimestampEntity } from 'src/Generics/timestamp.entity';
import { BudgetMonthEnum } from 'src/enum/budget-month.enum';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BudgetMonthEntity extends TimestampEntity {
  
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    type: "enum",
    enum: BudgetMonthEnum
  })
  readonly month: string;

  @Column({
    type: "year"    
  })
  readonly year: number;

  // Valeurs à renseigner pour calcul
  @Column({
    nullable: true,
    default: 0
  })
  salary: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  socialAssistance: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  helpThird: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  otherCommingIn: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  rent: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  energyInvoices: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  insuranceInvoices: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  telephonesInvoices: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  otherDebits: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  otherInvoices: number;
  
  // valeurs à calculer
  @Column({
    nullable: true,
    default: 0
  })
  monthBudget: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  monthExpenses: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  monthRemains: number;
  
  @Column({
    nullable: true,
    default: 0
  })
  weekRemains: number;

}