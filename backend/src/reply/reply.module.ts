import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema, Comment } from 'src/comment/schemas/comment.schemas';
import { ReplyController } from './reply.controller';
import { ReplyService } from './reply.service';
import { Reply, ReplySchema } from './schemas/reply.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: Reply.name, schema: ReplySchema }]), MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }])],
  controllers: [ReplyController],
  providers: [ReplyService]
})
export class ReplyModule { }
