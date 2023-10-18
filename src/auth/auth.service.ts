import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
    ) {}
        
    async postLogin(body: LoginDto) {
        const {password, email} = body;
        const user = await this.usersRepository.findOne({where: {email: email}});
        if(!user) throw new NotFoundException("User Not Found");
        const match = await bcrypt.compare(password, user.password);
        if(!match) throw new UnauthorizedException("Invalid Password");
        return user;
    }

    async postRegister(body: RegisterDto): Promise<string> {
        try {
            const {password} = body;
            const hash = await bcrypt.hash(password, 10);
            const user = this.usersRepository.create({...body, password : hash});
            await this.usersRepository.save(user);
            return 'Votre Compte a bien été créé, Vous pouvez-vous connecter !';
        } catch (error) {
            // throw new ConflictException(error.message);
            return 'Compte déjà existant !';
        }
    }
}
