import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { User } from './schemas/user.schema';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Model } from 'mongoose';
import { UnauthorizedException } from '@nestjs/common';

import { Logger } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<User>,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET,
		});
	}

	async validate(payload) {
		const { id } = payload;

		Logger.log('user', id);
		console.log('here');
		const user = await this.userModel.findById(id);

		console.log('user', user);

		if (!user) {
			throw new UnauthorizedException('daldsjjqdwodjqodijald');
		}

		return user;
	}
}
