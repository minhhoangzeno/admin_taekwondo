import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDocument, Comment } from 'src/comment/schemas/comment.schemas';
import { ReplyDto } from './dto/reply.dto';
import { Reply, ReplyDocument } from './schemas/reply.schemas';

@Injectable()
export class ReplyService {
    constructor(@InjectModel(Reply.name) private replyModel: Model<ReplyDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>
    ) { }

    async getReply(commentId: string): Promise<Reply[]> {
        return await this.replyModel.find({ commentId })
    }

    async addReply(replyDto: ReplyDto, fullName: string): Promise<Reply> {
        let date = new Date();
        let reply = await new this.replyModel({ ...replyDto, createdBy: fullName, createdAt: date });
        let comment = await this.commentModel.findById(replyDto.commentId);
        comment.replies.push(reply._id);
        comment.save()
        return reply.save();
    }

    async deleteReply(id: string): Promise<Reply> {
        let reply = await this.replyModel.findById(id);
        return reply.remove()
    }

    async updateReply(id: string, title: string) {
        let reply = await this.replyModel.findById(id);
        if (reply) {
            reply.title = title;
            reply.save()
            throw new HttpException('Success', 200)
        }
    }
}
