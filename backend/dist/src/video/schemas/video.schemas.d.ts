import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comment/schemas/comment.schemas';
export declare type VideoDocument = Video & Document;
export declare class Video {
    id: mongoose.Schema.Types.ObjectId;
    videoId: string;
    categoryId: string;
    title: string;
    photoURL: string;
    content: string;
    metaDescription: string;
    createdBy: string;
    createdAt: Date;
    comments: Comment[];
}
export declare const VideoSchema: mongoose.Schema<Document<Video, any, any>, mongoose.Model<Document<Video, any, any>, any, any, any>, any, any>;
