import { Model } from 'mongoose';
import { ForumDocument } from 'src/forum/schemas/forum.schemas';
import { ReplyDocument } from 'src/reply/schemas/reply.schemas';
import { VideoDocument } from 'src/video/schemas/video.schemas';
import { CommentDto } from './dto/comment.dto';
import { Comment, CommentDocument } from './schemas/comment.schemas';
export declare class CommentService {
    private commentModel;
    private videoModel;
    private replyModel;
    private forumModel;
    constructor(commentModel: Model<CommentDocument>, videoModel: Model<VideoDocument>, replyModel: Model<ReplyDocument>, forumModel: Model<ForumDocument>);
    getComment(typeId: string): Promise<(Comment & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    addComment(createCommentDto: CommentDto, fullName: string): Promise<Comment>;
    deleteComment(commentId: string): Promise<void>;
    updateComment(commentId: string, title: string): Promise<Comment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
