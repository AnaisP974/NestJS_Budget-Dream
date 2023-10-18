import { Exclude } from 'class-transformer';
import { TimestampEntity } from 'src/Generics/timestamp.entity';
import { Goal } from 'src/goal/entity/goal.entity';
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

  @OneToMany(() => Goal, (goal) => goal.user)
  goals: Goal[]

//   @Column({ default: true })
//   readonly isActive: boolean;
}