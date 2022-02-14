import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentService } from 'src/comment/comment.service';
import { Comment, CommentSchema } from 'src/comment/schemas/comment.schemas';
import { Reply, ReplySchema } from 'src/reply/schemas/reply.schemas';
import { Video, VideoSchema } from 'src/video/schemas/video.schemas';
import { ForumController } from './forum.controller';
import { ForumService } from './forum.service';
import { Forum, ForumSchema } from './schemas/forum.schemas';


@Module({
  imports: [MongooseModule.forFeature([{ name: Forum.name, schema: ForumSchema }]),
  MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  MongooseModule.forFeature([{ name: Reply.name, schema: ReplySchema }]),
  MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }]),
  ],
  controllers: [ForumController],
  providers: [ForumService, CommentService]
})
export class ForumModule { }
