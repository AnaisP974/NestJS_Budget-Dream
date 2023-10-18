import { Module } from '@nestjs/common';
import { GoalModule } from 'src/goal/goal.module';
import { GoalService } from 'src/goal/goal.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GoalModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
