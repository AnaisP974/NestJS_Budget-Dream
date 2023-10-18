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
    nullable: true
  })
  salary: number;
  @Column({
    nullable: true
  })
  socialAssistance: number;
  @Column({
    nullable: true
  })
  helpThird: number;
  @Column({
    nullable: true
  })
  otherCommingIn: number;
  
  @Column({
    nullable: true
  })
  rent: number;
  @Column({
    nullable: true
  })
  energyInvoices: number;
  @Column({
    nullable: true
  })
  insuranceInvoices: number;
  @Column({
    nullable: true
  })
  telephonesInvoices: number;
  @Column({
    nullable: true
  })
  otherDebits: number;
  @Column({
    nullable: true
  })
  otherInvoices: number;
  
  // valeurs à calculer
  @Column({
    nullable: true
  })
  monthBudget: number;
  @Column({
    nullable: true
  })
  monthExpenses: number;
  @Column({
    nullable: true
  })
  monthRemains: number;
  @Column({
    nullable: true
  })
  weekRemains: number;

}