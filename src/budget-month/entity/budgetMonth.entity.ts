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

  // @OneToOne(() => WeekBudgetEntity)
  // @JoinColumn()
  // weekBudget: WeekBudgetEntity;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly food1: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly food2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly food3: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly food4: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly food5: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly travel1: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly travel2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly travel3: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0
  })
  readonly travel4: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0
  })
  readonly travel5: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly leisure1: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly leisure2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly leisure3: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly leisure4: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly leisure5: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly emergency1: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly emergency2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly emergency3: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0
  })
  readonly emergency4: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  readonly emergency5: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  plannedBudget1: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  plannedBudget2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  plannedBudget3: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  plannedBudget4: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  plannedBudget5: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  spentBudget1: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  spentBudget2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  spentBudget3: number;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  spentBudget4: number;  
  
  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  spentBudget5: number;

  @Column({
    type: "boolean",
    nullable: true,
  })
  isWinning: boolean;

  @Column({
    type: "integer",
    nullable: true,
    default: 0,
  })
  remainingAmount: number;

}