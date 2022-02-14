import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type ReplyDocument = Reply & Document;
export declare class Reply {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    createdBy: string;
    createdAt: Date;
    commentId: string;
}
export declare const ReplySchema: mongoose.Schema<Document<Reply, any, any>, mongoose.Model<Document<Reply, any, any>, any, any, any>, any, any>;
