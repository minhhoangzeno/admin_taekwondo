import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Forum } from 'src/forum/schemas/forum.schemas';
export declare type CategoryForumDocument = CategoryForum & Document;
export declare class CategoryForum {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    forums: Forum[];
}
export declare const CategoryForumSchema: mongoose.Schema<mongoose.Document<CategoryForum, any, any>, mongoose.Model<mongoose.Document<CategoryForum, any, any>, any, any, any>, any, any>;
