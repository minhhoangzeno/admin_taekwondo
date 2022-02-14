/// <reference types="mongoose" />
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getComment(typeId: string): Promise<(import("./schemas/comment.schemas").Comment & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createComment(body: CommentDto, req: any): Promise<import("./schemas/comment.schemas").Comment>;
    removeCommentById(id: any): Promise<void>;
    updateCommentById(id: any, body: any): Promise<import("./schemas/comment.schemas").Comment & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
