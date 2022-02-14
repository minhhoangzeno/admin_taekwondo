import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentService } from 'src/comment/comment.service';
import { Comment, CommentSchema } from 'src/comment/schemas/comment.schemas';
import { Forum, ForumSchema } from 'src/forum/schemas/forum.schemas';
import { Reply, ReplySchema } from 'src/reply/schemas/reply.schemas';
import { Video, VideoSchema } from './schemas/video.schemas';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
  MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  MongooseModule.forFeature([{ name: Reply.name, schema: ReplySchema }]),
  MongooseModule.forFeature([{ name: Forum.name, schema: ForumSchema }])
  ],
  controllers: [VideoController],
  providers: [VideoService, CommentService]
})
export class VideoModule { }
