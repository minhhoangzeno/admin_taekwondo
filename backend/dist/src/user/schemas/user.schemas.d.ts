import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from 'src/role/role.enum';
export declare type UserDocument = User & Document;
export declare class User {
    id: mongoose.Schema.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    confirmationCode: string;
    status: string;
    firstName: string;
    lastName: string;
    roles: Role[];
    fullName: string;
}
export declare const UserSchema: mongoose.Schema<Document<User, any, any>, mongoose.Model<Document<User, any, any>, any, any, any>, any, any>;
