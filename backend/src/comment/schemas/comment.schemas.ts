import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Reply } from 'src/reply/schemas/reply.schemas';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop()
    typeId: string;

    @Prop({ required: true })
    title: string;

    @Prop()
    createdBy: string

    @Prop()
    createdAt: Date

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reply' }] })
    replies: Reply[];

}

export const CommentSchema = SchemaFactory.createForClass(Comment);