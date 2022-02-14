import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type TokenDocument = Token & Document;
export declare class Token {
    id: mongoose.Schema.Types.ObjectId;
    accountId: mongoose.Schema.Types.ObjectId;
    token: string;
    created: Date;
}
export declare const TokenSchema: mongoose.Schema<Document<Token, any, any>, mongoose.Model<Document<Token, any, any>, any, any, any>, any, any>;
