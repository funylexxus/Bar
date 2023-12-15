import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
	constructor(private authServie: AuthService) {}

	@Post('/signup')
	signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
		return this.authServie.signUp(signUpDto);
	}

	@Get('/login')
	login(@Query() loginDto: LoginDto): Promise<{ token: string }> {
		return this.authServie.login(loginDto);
	}
}
