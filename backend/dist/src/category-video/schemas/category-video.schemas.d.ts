import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Video } from 'src/video/schemas/video.schemas';
export declare type CategoryVideoDocument = CategoryVideo & Document;
export declare class CategoryVideo {
    id: mongoose.Schema.Types.ObjectId;
    title: string;
    videos: Video[];
}
export declare const CategoryVideoSchema: mongoose.Schema<Document<CategoryVideo, any, any>, mongoose.Model<Document<CategoryVideo, any, any>, any, any, any>, any, any>;
