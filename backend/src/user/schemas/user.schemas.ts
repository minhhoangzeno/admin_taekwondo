import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { UserStatus } from '../enum/user-status.enum';
import { Role } from 'src/role/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ unique: true, required: true })
    password: string;

    @Prop({ unique: true })
    confirmationCode: string;

    @Prop({ default: UserStatus.Pending })
    status: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({default: Role.User })
    roles: Role[]

    @Prop()
    fullName: string

}

export const UserSchema = SchemaFactory.createForClass(User);