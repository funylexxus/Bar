import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignUpDto {
	@IsNotEmpty()
	@IsString()
	readonly firstName: string;

	@IsString()
	@IsNotEmpty()
	readonly lastName: string;

	@IsNotEmpty()
	@IsEmail({}, { message: 'email is incorrect' })
	@IsString()
	readonly email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(6)
	readonly password: string;
}
