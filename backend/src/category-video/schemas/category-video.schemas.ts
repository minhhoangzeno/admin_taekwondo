import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Video } from 'src/video/schemas/video.schemas';

export type CategoryVideoDocument = CategoryVideo & Document;

@Schema()
export class CategoryVideo {
    @Prop()
    id: mongoose.Schema.Types.ObjectId;

    @Prop({ required: true })
    title: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }] })
    videos: Video[];

}

export const CategoryVideoSchema = SchemaFactory.createForClass(CategoryVideo);