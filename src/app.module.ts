import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { GoalModule } from './goal/goal.module';
import { Goal } from './goal/entity/goal.entity';
import { BudgetMonthModule } from './budget-month/budget-month.module';
import { BudgetMonthEntity } from './budget-month/entity/budgetMonth.entity';
import * as dotenv from 'dotenv';
import { TimestampEntity } from './Generics/timestamp.entity';

dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Goal, BudgetMonthEntity, TimestampEntity ],
      synchronize: true,
    }),
    UserModule, 
    AuthModule, 
    GoalModule, BudgetMonthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
