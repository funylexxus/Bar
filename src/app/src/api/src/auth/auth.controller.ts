import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('api/v1/auth')
export class AuthController {
	constructor(private authServie: AuthService) {}

	@Get('/check-email')
	checkEmail(@Req() req) {
		const { email } = req.params;
		return this.authServie.checkEmail(email);
	}

	@Post('/signup')
	signUp(@Body() signUpDto: SignUpDto, @Req() req): Promise<{ token: string }> {
		return this.authServie.signUp(signUpDto, req);
	}

	@Get('/login')
	login(@Query() loginDto: LoginDto, @Req() req): any {
		return this.authServie.login(loginDto, req);
	}

	@Get('/customers-number')
	getCustomersNumber() {
		return this.authServie.getCustomersNumber();
	}
}
