import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoalController } from './goal.controller';
import { GoalEntity } from './entity/goal.entity';
import { GoalService } from './goal.service';

@Module({
  imports: [TypeOrmModule.forFeature([GoalEntity])],
  controllers: [GoalController],
  providers: [GoalService],
  exports: [GoalService]
})
export class GoalModule {}
