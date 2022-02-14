import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Forum, ForumDocument } from 'src/forum/schemas/forum.schemas';
import { Reply, ReplyDocument } from 'src/reply/schemas/reply.schemas';
import { Video, VideoDocument } from 'src/video/schemas/video.schemas';
import { CommentDto } from './dto/comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schemas';

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
    @InjectModel(Video.name) private videoModel: Model<VideoDocument>,
        @InjectModel(Reply.name) private replyModel: Model<ReplyDocument>,
        @InjectModel(Forum.name) private forumModel: Model<ForumDocument>,

    ) { }

    async getComment(typeId: string) {
        return this.commentModel.find({ typeId }).populate('replies', 'title createdBy', 'Reply')
    }

    async addComment(createCommentDto: CommentDto, fullName: string): Promise<Comment> {
        let date = new Date();
        let comment = new this.commentModel({ ...createCommentDto, createdAt: date, createdBy: fullName });
        let video = await this.videoModel.findById(createCommentDto.typeId);
        let forum = await this.forumModel.findById(createCommentDto.typeId);
        if (video) {
            video.comments.push(comment._id);
            video.save()
        } else if (forum) {
            forum.comments.push(comment._id);
            forum.save()
        }

        return comment.save()
    }

    async deleteComment(commentId: string) {
        let comment = await this.commentModel.findById(commentId);
        comment.remove();
        let replies = await this.replyModel.find({ commentId });
        if (replies.length > 0) {
            replies.forEach(reply => reply.remove())
        }
    }

    async updateComment(commentId: string, title: string) {
        let comment = await this.commentModel.findById(commentId);
        if (comment) {
            comment.title = title;
            return comment.save();
        }
    }
}
