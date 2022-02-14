import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare type BlogDocument = Blog & Document;
export declare class Blog {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    content: string;
    metaDescription: string;
    photoURL: string;
    createdBy: string;
    createdAt: Date;
}
export declare const BlogSchema: mongoose.Schema<Document<Blog, any, any>, mongoose.Model<Document<Blog, any, any>, any, any, any>, any, any>;
