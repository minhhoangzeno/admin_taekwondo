import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Forum } from 'src/forum/schemas/forum.schemas';

export type CategoryForumDocument = CategoryForum & Document;

@Schema()
export class CategoryForum {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Forum' }] })
    forums: Forum[];

}

export const CategoryForumSchema = SchemaFactory.createForClass(CategoryForum);