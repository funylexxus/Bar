import {
	BadRequestException,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<User>,
		private jwtService: JwtService,
	) {}

	async checkEmail(email) {
		const user = await this.userModel.findOne({ email });

		return { emailAlreadyExist: !!user };
	}

	async signUp(signUpDto: SignUpDto, req): Promise<{ token: string }> {
		const { firstName, lastName, email, password } = signUpDto;

		const user = await this.userModel.findOne({ email });

		if (user) {
			throw new BadRequestException({ message: ['email already exists'] });
		}

		const hashPassword = await bcrypt.hash(password, 10);
		const isAdmin = req.get('origin') === process.env.ADMIN_URL;
		const createdUser = await this.userModel.create({
			firstName,
			lastName,
			email,
			password: hashPassword,
			isAdmin,
		});

		const token = this.jwtService.sign({ id: createdUser._id });

		return { token };
	}

	async login(loginDto: LoginDto, req): Promise<{ token }> {
		const { email, password } = loginDto;
		const user = await this.userModel.findOne({ email });

		if (!user) {
			throw new UnauthorizedException('!Invalid email');
		}

		const isPasswordMatched = await bcrypt.compare(password, user.password);

		if (!isPasswordMatched) {
			throw new UnauthorizedException('!Invalid password');
		}

		const isRequestFromAdmin = req.get('origin') === process.env.ADMIN_URL;
		const userIsNotAdmin = !user.isAdmin;

		if (isRequestFromAdmin && userIsNotAdmin) {
			throw new UnauthorizedException('Acess permission denied');
		}

		const token = this.jwtService.sign({ id: user._id });

		return { token };
	}
}
