import { Exclude } from 'class-transformer';
import { TimestampEntity } from 'src/Generics/timestamp.entity';
import { GoalEntity } from 'src/goal/entity/goal.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User extends TimestampEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly pseudo: string;

  @Column({unique: true})
  readonly email: string;

  @Column()
  @Exclude()
  readonly password: string;

  @OneToMany(() => GoalEntity, (goal) => goal.user)
  goals: GoalEntity[]

//   @Column({ default: true })
//   readonly isActive: boolean;
}