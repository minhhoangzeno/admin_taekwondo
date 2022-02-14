import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schemas';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    findAll(): Promise<User[] | undefined>;
    findOne(username: string): Promise<User | undefined>;
    register(createUserDto: CreateUserDto): Promise<User>;
    checkUniqueBeforeRegister(email: string, username: string): Promise<void>;
    sendEmailRegister(name: string, email: string, confirmationCode: string): Promise<void>;
    verifyUser(confirmationCode: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    changePassword(newPassword: string, username: string): Promise<void>;
    forgotPassword(email: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    sendEmailForgotPassword(name: string, email: string, confirmationCode: string): Promise<void>;
    checkBeforeVerifyPassword(confirmationCode: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    verifyPassword(confirmationCode: string, newPassword: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
