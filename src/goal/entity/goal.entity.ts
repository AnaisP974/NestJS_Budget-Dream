import { TimestampEntity } from 'src/Generics/timestamp.entity';
import { User } from 'src/user/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Goal extends TimestampEntity {
  
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column()
  readonly name: string;

  @Column()
  readonly cost: number;

  @Column()
  readonly image: string;

  @Column({type : "text"})
  readonly description: string;

  @Column()
  readonly status: string;

  @ManyToOne(() => User, (user) => user.goals)
  user: User
}