import { Body, ClassSerializerInterceptor, Controller, Get, Post, Redirect, Render, Session, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get()
    @Render("auth/authentification")
    getAuth(){}

    @UseInterceptors(ClassSerializerInterceptor)
    @Post('login')
    @Redirect('/user')
    async postLogin(@Body() body: LoginDto, @Session() session: Record<string, any>){
        const user = await this.authService.postLogin(body);
        session.user = user;
        session.connected = true;
    }

    @Post('register')
    @Redirect("/auth")
    async postRegister(@Body() body: RegisterDto, @Session() session: Record<string, any>) {
       const message = await this.authService.postRegister(body);
       session.message = message;
       session.register = true;
    }

    @Post('logout')
    @Redirect("/")
    postLogout(@Session() session: Record<string, any>){
        session.destroy((err) => {})
    }
}
