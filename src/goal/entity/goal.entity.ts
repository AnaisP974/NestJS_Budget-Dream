import { TimestampEntity } from 'src/Generics/timestamp.entity';
import { GoalStatusEnum } from 'src/enum/goal-status.enum';
import { User } from 'src/user/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class GoalEntity extends TimestampEntity {
  
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({
    type : "varchar",
    length: 100
  })
  readonly name: string;

  @Column({
    type : "float"
  })
  readonly cost: number;

  @Column({nullable: true})
  readonly image: string;

  @Column({type : "text"})
  readonly description: string;

  @Column({
    type: "enum",
    enum: GoalStatusEnum,
    default: 'en attente'
  })
  readonly status: string;

  @ManyToOne(() => User, (user) => user.goals)
  user: User
}