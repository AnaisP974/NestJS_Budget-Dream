import { TimestampEntity } from 'src/Generics/timestamp.entity';
import { BudgetMonthEntity } from 'src/budget-month/entity/budgetMonth.entity';
import { BudgetMonthEnum } from 'src/enum/budget-month.enum';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class WeekBudgetEntity extends TimestampEntity {
  
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly food1: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly food2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
  })
  readonly food3: number;

  @Column({
    type: "integer",
    nullable: true
  })
  readonly food4: number;  
  
  @Column({
    type: "integer",
    nullable: true
  })
  readonly food5: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly travel1: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly travel2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
  })
  readonly travel3: number;

  @Column({
    type: "integer",
    nullable: true
  })
  readonly travel4: number;  
  
  @Column({
    type: "integer",
    nullable: true
  })
  readonly travel5: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly leisure1: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly leisure2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
  })
  readonly leisure3: number;

  @Column({
    type: "integer",
    nullable: true
  })
  readonly leisure4: number;  
  
  @Column({
    type: "integer",
    nullable: true
  })
  readonly leisure5: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly emergency1: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly emergency2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
  })
  readonly emergency3: number;

  @Column({
    type: "integer",
    nullable: true
  })
  readonly emergency4: number;  
  
  @Column({
    type: "integer",
    nullable: true
  })
  readonly emergency5: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly plannedBudget1: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly plannedBudget2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
  })
  readonly plannedBudget3: number;

  @Column({
    type: "integer",
    nullable: true
  })
  readonly plannedBudget4: number;  
  
  @Column({
    type: "integer",
    nullable: true
  })
  readonly plannedBudget5: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly spentBudget1: number;

  @Column({
    type: "integer",
    nullable: true,
  })
  readonly spentBudget2: number;  
  
  @Column({
    type: "integer",
    nullable: true,
  })
  readonly spentBudget3: number;

  @Column({
    type: "integer",
    nullable: true
  })
  readonly spentBudget4: number;  
  
  @Column({
    type: "integer",
    nullable: true
  })
  readonly spentBudget5: number;

  @Column({
    type: "boolean",
    nullable: true
  })
  readonly isWinning: boolean;

  @Column({
    type: "integer",
    nullable: true
  })
  readonly remainingAmount: number;

  @OneToOne(()=> BudgetMonthEntity)
  @JoinColumn()
  budgetMonth: BudgetMonthEntity;
}