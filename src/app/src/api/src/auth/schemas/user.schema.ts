import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema({
	timestamps: true,
})
export class User {
	@Prop()
	firstName: string;

	@Prop()
	lastName: string;

	@Prop({ unique: [true, 'Email is already in use'] })
	email: string;

	@Prop()
	username: string;

	@Prop()
	password: string;

	@Prop({ default: false })
	isAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
