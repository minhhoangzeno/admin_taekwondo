import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comment/schemas/comment.schemas';
export declare type ForumDocument = Forum & Document;
export declare class Forum {
    id: mongoose.Schema.Types.ObjectId;
    categoryId: string;
    title: string;
    photoURL: string;
    content: string;
    metaDescription: string;
    createdBy: string;
    createdAt: Date;
    comments: Comment[];
}
export declare const ForumSchema: mongoose.Schema<Document<Forum, any, any>, mongoose.Model<Document<Forum, any, any>, any, any, any>, any, any>;
