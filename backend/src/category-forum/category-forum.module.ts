import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentService } from 'src/comment/comment.service';
import { Comment, CommentSchema } from 'src/comment/schemas/comment.schemas';
import { ForumService } from 'src/forum/forum.service';
import { Forum, ForumSchema } from 'src/forum/schemas/forum.schemas';
import { Reply, ReplySchema } from 'src/reply/schemas/reply.schemas';
import { Video, VideoSchema } from 'src/video/schemas/video.schemas';
import { CategoryForumController } from './category-forum.controller';
import { CategoryForumService } from './category-forum.service';
import { CategoryForum, CategoryForumSchema } from './schemas/category-forum.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: CategoryForum.name, schema: CategoryForumSchema }]),
  MongooseModule.forFeature([{ name: Forum.name, schema: ForumSchema }]),
  MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
  MongooseModule.forFeature([{ name: Reply.name, schema: ReplySchema }]),
  MongooseModule.forFeature([{ name: Video.name, schema: VideoSchema }])
  ],
  controllers: [CategoryForumController],
  providers: [CategoryForumService, ForumService, CommentService]
})
export class CategoryForumModule { }
