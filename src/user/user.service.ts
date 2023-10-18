import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';


@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

    // async findOne(email: string): Promise<User | undefined> {
    //     const user = await this.userRepository.find((user: User) => user.email === email);
    //     return user;
    // }
}
