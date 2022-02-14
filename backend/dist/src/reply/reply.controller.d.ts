import { ReplyDto } from './dto/reply.dto';
import { ReplyService } from './reply.service';
export declare class ReplyController {
    private replyService;
    constructor(replyService: ReplyService);
    getReplyByCommentId(commentId: any): Promise<import("./schemas/reply.schemas").Reply[]>;
    addReplyCommentId(body: ReplyDto, req: any): Promise<import("./schemas/reply.schemas").Reply>;
    removeReplyById(id: any): Promise<import("./schemas/reply.schemas").Reply>;
    updateReplyById(id: any, body: any): Promise<void>;
}
