import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentService } from 'src/comment/comment.service';
import { Comment, CommentSchema } from 'src/comment/schemas/comment.schemas';
import { Forum, ForumSchema } from 'src/forum/schemas/forum.schemas';
import { Reply, ReplySchema } from 'src/reply/schemas/reply.schemas';
import { Video, VideoSchema } from 'src/video/schemas/video.schemas';
import { VideoService } from 'src/video/video.service';
import { CategoryVideoController } from './category-video.controller';
import { CategoryVideoService } from './category-video.service';
import { CategoryVideo, CategoryVideoSchema } from './schemas/category-video.schemas';

@Module({
    imports: [MongooseModule.forFeature([{ name: CategoryVideo.name, schema: CategoryVideoSchema }]),
    MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    MongooseModule.forFeature([{ name: Reply.name, schema: ReplySchema }]),
    MongooseModule.forFeature([{ name: Forum.name, schema: ForumSchema }])
    ],
    controllers: [CategoryVideoController],
    providers: [CategoryVideoService, VideoService, CommentService]
})
export class CategoryVideoModule { }
