import { Model } from 'mongoose';
import { CommentDocument } from 'src/comment/schemas/comment.schemas';
import { ReplyDto } from './dto/reply.dto';
import { Reply, ReplyDocument } from './schemas/reply.schemas';
export declare class ReplyService {
    private replyModel;
    private commentModel;
    constructor(replyModel: Model<ReplyDocument>, commentModel: Model<CommentDocument>);
    getReply(commentId: string): Promise<Reply[]>;
    addReply(replyDto: ReplyDto, fullName: string): Promise<Reply>;
    deleteReply(id: string): Promise<Reply>;
    updateReply(id: string, title: string): Promise<void>;
}
