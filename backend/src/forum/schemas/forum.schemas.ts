import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Comment } from 'src/comment/schemas/comment.schemas';

export type ForumDocument = Forum & Document;

@Schema()
export class Forum {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({})
    categoryId: string;

    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    photoURL: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    metaDescription: string;

    @Prop()
    createdBy: string;

    @Prop()
    createdAt: Date;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
    comments: Comment[];

}

export const ForumSchema = SchemaFactory.createForClass(Forum);