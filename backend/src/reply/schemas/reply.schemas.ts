import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type ReplyDocument = Reply & Document;

@Schema()
export class Reply {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop()
    createdBy: string

    @Prop()
    createdAt: Date

    @Prop()
    commentId: string

}

export const ReplySchema = SchemaFactory.createForClass(Reply);